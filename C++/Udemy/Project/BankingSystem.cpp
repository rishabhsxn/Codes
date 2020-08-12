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

    public:
        Bank();
        Account openAccount();
        void balanceEnquiry(int accountNumber);
        void withdrawl(int accountNumber, int amount);
        void deposit(int accountNumber, int amount);
        void closeAccount(int accountNumber);
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

        switch(choice){
            case 1:

                break;

            case 2:

                break;

            case 3:

                break;

            case 4:

                break;

            case 5:

                break;

            case 6:

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

    }
}

Account Bank::openAccount(){

}

void Bank::balanceEnquiry(int accountNumber){

}

void Bank::deposit(int accountNumber, int amount){

}

void Bank::withdrawl(int accountNumber, int amount){

}

void Bank::closeAccount(int accountNumber){

}

void Bank::showAllAccounts(){

}

Bank::~Bank(){
    // overwrite the data file will map accounts

}