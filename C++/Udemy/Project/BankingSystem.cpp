/* This is a menu-based project that runs on the terminal with options to 
1. Create an account (assign account no. in a sequential manner) with minimum balance of 500
2. Balance enquiry (input account no.)
3. Deposit money
4. Withdraw money (if funds sufficient)
5. Close an account
6. Show all accounts - ask admin password (ADMIN)
7. Quit

* Information entered should not be lost after closing program (store in file - serialization)
* Throw custom InsufficientFund exception and handle accordingly */

/* WORKING - when the program starts, Bank object is created, it's constructor will copy all accounts from text file,
(this is how lastAccountNumber is calculated). Accounts are deleted and created in this map (accounts) and when the 
program exits when the Bank object is deleted, it's destructor will overwrite the new accounts data in the text file. */


#include<iostream>
#include<fstream>
#include<map>
#include<exception>

using namespace std;

#define MINIMUM_BALANCE 500
#define FILE_NAME "account_details.txt"



// write custom exception class for Insufficient Funds
class InsufficientFunds: exception{
    public:
        const char * what() const throw() { return "Not enough funds in the account!\n"; }
};



// Account class
class Account{
    private:
        string fname;
        string lname;
        int account_no;
        int balance;
        static int lastAccountNumber;    // to keep track of what account no. to assign to new account

    public:
        Account() {};   // empty account needed for operations in Bank class
        Account(string fname, string lname, int balance);

        string getName();
        int getAccountNo();
        int getBalance();
        static int getLastAccountNumber();

        static void setLastAccountNumber(int n);

        void withdrawal(int amount) /* throw(InsufficientFund) */;
        void deposit(int amount);

        friend ifstream& operator>>(ifstream &ifs, Account &account);
        friend ofstream& operator<<(ofstream &ofs, Account &account);
        friend ostream& operator<<(ostream &out, Account &account);
};

int Account::lastAccountNumber = 0;



class Bank{
    private:
        map<int, Account> accounts;
        string password = "admin";

    public:
        Bank();
        void openAccount();
        void balanceEnquiry();
        void withdrawal();
        void deposit();
        void closeAccount();
        void showAllAccounts();
        ~Bank();
};



int main(){

    cout << "----------------------BANKING SYSTEM----------------------" << endl << endl;

    int choice;
    Bank bank;
    

    do{
        cout << "\t1. Create an Account" << endl;
        cout << "\t2. Balance Enquiry" << endl;
        cout << "\t3. Deposit funds" << endl;
        cout << "\t4. Withdraw funds" << endl;
        cout << "\t5. Close your Account" << endl;
        cout << "\t6. Show all Accounts" << endl;
        cout << "\t7. Quit" << endl << endl;
        cout << "Enter you choice: ";
        cin >> choice;
        cout << endl;

        switch(choice){
            /*  ***IMP*** These braces were added to remove an error - "transfer of control bypasses initialization of newAccount variable" 
            Switch is a goto in disguise. In C++, goto, it is not allowed to bypass initialization of a non-POD object
            
            POD stands for Plain Old Data - that is, a class (whether defined with the keyword struct or the keyword class) without 
            constructors, destructors and virtual members functions.        */
            case 1:
            {
                // Account newAccount;
                // newAccount = bank.openAccount();
                bank.openAccount();
                break;
            }

            case 2:
                bank.balanceEnquiry();
                break;

            case 3:
                bank.deposit();
                break;

            case 4:
                bank.withdrawal();
                break;

            case 5:
                bank.closeAccount();
                break;

            case 6:
                bank.showAllAccounts();
                break;
            
            case 7:
                cout << "Thank you for using our services! \nExiting..." << endl;
                break;

            default:
                cout << "----------------------------------------------------------------" << endl;
                cout << "|    Opps! Looks like your input doesn't match the options.    |" << endl;
                cout << "|    Try Again!                                                |" << endl;
                cout << "----------------------------------------------------------------" << endl;

                continue;
        }

    }while(choice != 7);

    return 0;
}



// -------------------------------ACCOUNT-------------------------------

Account::Account(string fname, string lname, int balance){
    this->fname = fname;
    this->lname = lname;
    lastAccountNumber++;
    this->account_no = lastAccountNumber;
    this->balance = balance;
}

string Account::getName(){
    return fname + " " + lname;
}

int Account::getAccountNo(){
    return account_no;
}

int Account::getBalance(){
    return balance;
}

int Account::getLastAccountNumber(){
    return lastAccountNumber;
}

void Account::setLastAccountNumber(int n){
    lastAccountNumber = n;
}

void Account::withdrawal(int amount){
    if(balance-amount < MINIMUM_BALANCE)
        throw InsufficientFunds();

    balance -= amount;
}

void Account::deposit(int amount){
    balance += amount;
}

ifstream& operator>>(ifstream &ifs, Account &account){
    ifs >> account.account_no;
    ifs >> account.fname;
    ifs >> account.lname;
    ifs >> account.balance;

    return ifs;
}

ofstream& operator<<(ofstream &ofs, Account &account){
    ofs << account.account_no << endl;
    ofs << account.getName() << endl;
    ofs << account.balance << endl;

    return ofs;
}

ostream& operator<<(ostream &out, Account &account){
    out << "Name: " << account.getName() << endl;
    out << "Account No.: " << account.account_no << endl;
    out << "Current Balance: " << account.balance << endl;

    return out;
}


// -------------------------------BANK-------------------------------

Bank::Bank(){
    // open data file and copy all accounts to map
    ifstream in_file(FILE_NAME);

    if(in_file.is_open()){
        // file already exist, copy data
        Account account;
        while(!in_file.eof()){
            in_file >> account;
            accounts.insert(pair<int, Account>(account.getAccountNo(), account));
        }
        // from the last account, use it to update the lastAccountNumber
        Account::setLastAccountNumber(account.getAccountNo());

        in_file.close();

    }
}

void Bank::openAccount(){
    string fname, lname;
    cout << "Enter First Name: ";
    cin >> fname;
    cout << "Enter Last Name: ";
    cin >> lname;

    int openingBalance;
    cout << "\nEnter Opening Balance: ";
    cin >> openingBalance;

    if(openingBalance >= 500){
        Account newAccount(fname, lname, openingBalance);
        // add this new account to map (accounts), so that it will be added to the data file when program exits
        accounts.insert(pair<int, Account>(newAccount.getAccountNo(), newAccount));
        
        cout << "Account successfully created !!" << endl;
        cout << "Your details: \n" << newAccount << endl << endl;
    }
    else
        cout << "Account creation unsuccessful ! Minimum Balance is 500." << endl << endl;

}

void Bank::balanceEnquiry(){
    int accountNumber;
    cout << "Enter your Account No.: ";
    cin >> accountNumber;

    // search this account no. in accounts(map), if it exists find the balance otherwise show no account found
    map<int, Account>::iterator itr;

    for(itr=accounts.begin(); itr!=accounts.end(); itr++){

        if(itr->first == accountNumber){
            cout << itr->second << endl;
            return;
        }
    }

    cout << "No account with provided account number! Enter the correct account no." << endl << endl;

}

void Bank::deposit(){
    int accountNumber, amount;

    cout << "Enter your Account no.: ";
    cin >> accountNumber;

    map<int, Account>::iterator itr;

    for(itr=accounts.begin(); itr!=accounts.end(); itr++){

        if(itr->first == accountNumber){
            cout << "Enter deposit amount: ";
            cin >> amount;
            itr->second.deposit(amount);
            cout << "Deposited Successfully!" << endl;
            cout << itr->second << endl;
            return;
        }
    }

    cout << "No account with provided account number! Enter the correct account no." << endl << endl;


}

void Bank::withdrawal(){
    int accountNumber, amount;

    cout << "Enter your Account no.: ";
    cin >> accountNumber;

    map<int, Account>::iterator itr;

    for(itr=accounts.begin(); itr!=accounts.end(); itr++){

        if(itr->first == accountNumber){
            cout << "Your current balance: " << itr->second.getBalance() << endl;
            cout << "Enter withdrawal amount: ";
            cin >> amount;
            try{
                itr->second.withdrawal(amount);
                cout << "Withdrawal Successfully!" << endl;
                cout << itr->second << endl;
            }
            catch(InsufficientFunds& er){
                cout << er.what() << endl;
            }
            
            return;
        }
    }

    cout << "No account with provided account number! Enter the correct account no." << endl << endl;


}

void Bank::closeAccount(){
    int accountNumber;

    cout << "Enter your Account no.: ";
    cin >> accountNumber;

    map<int, Account>::iterator itr = accounts.find(accountNumber);

    if(itr != accounts.end()){
        cout << "Closing Account: " << endl;
        cout << itr->second << endl << endl;

        accounts.erase(accountNumber);
        cout << "Account Successfully Closed!" << endl << endl;
    }
    else
        cout << "No account with provided account number! Enter the correct account no." << endl << endl;
}

void Bank::showAllAccounts(){
    string pass;
    cout << "Enter Admin password: ";
    cin >> pass;

    for(int count=1; count<=2; count--){
        if(pass == password){
            map<int, Account>::iterator itr;

            for(itr=accounts.begin(); itr!=accounts.end(); itr++)
                cout << itr->second << endl;

            return;
        }
        else{
            cout << "Incorrect! You have " << (3-count) << " left." << endl;
            cout << "Enter Admin password: ";
            cin >> pass;
        }
    }

    cout << "Incorrect Password !!!" << endl << endl;
}

Bank::~Bank(){
    // overwrite the data file will map accounts
    ofstream out_file(FILE_NAME, ios::trunc);   // trunc mode to overwrite the data file if it exists

    // create an iterator for the map and then write every element in the file
    map<int, Account>::iterator itr;

    for(itr=accounts.begin(); itr!=accounts.end(); itr++){
        out_file << itr->second;        // second part is the Account object
    }

    out_file.close();
}