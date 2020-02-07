# Write a program to prompt the user for hours and rate per hour using input to compute gross pay.
# Pay the hourly rate for the hours up to 40 and 1.5 times the hourly rate for all hours worked above 40 hours.
# Use 45 hours and a rate of 10.50 per hour to test the program (the pay should be 498.75).
# You should use input to read a string and float() to convert the string to a number.
# check and deal with errors in user input


try :
    hrs = float(input('Enter hours: '))
    rate = float(input('Enter rate: '))
except :
    print("Error, not a valid number")
    quit()


if hrs<=40 :
    gp = hrs * rate
else :
    gp = 40*rate
    gp = gp + (hrs-40)*(1.5*rate)

print(gp)
