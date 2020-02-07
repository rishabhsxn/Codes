 # Write a program that prompts for a file name, then opens that file and reads through the file, and print the contents of the file in upper case.
 # Use the file words.txt to produce the output below.

fname = input('Enter filename: ')

try:
    fhand=open(fname,'r')
except:
    print('Cannot open file:',fname)
    quit()

for x in fhand:
    x=x.rstrip()
    print(x.upper())
