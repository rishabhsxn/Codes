# Write a program that repeatedly prompts a user for integer numbers until the user enters 'done'.
# Once 'done' is entered, print out the largest and smallest of the numbers.
# If the user enters anything other than a valid number catch it with a try/except and put out an appropriate message and ignore the number.
# Enter 7, 2, bob, 10, and 4 and match the output below.

min = None
max = None

while True :
    num = input('Enter number: ')
    if num == 'done' :
        break
    try :
        n = int(num)
    except :
        print('Invalid input')
        continue

    if min is None :
        min = n
    elif n<min :
        min=n

    if max is None :
        max=n
    elif n>max :
        max=n

print('Maximum is',max)
print('Minimum is',min)
