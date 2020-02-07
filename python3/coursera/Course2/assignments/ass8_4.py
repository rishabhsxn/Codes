# Open the file romeo.txt and read it line by line. For each line, split the line into a list of words using the split() method.
# The program should build a list of words. For each word on each line check to see if the word is already in the list and if not append it to the list.
# When the program completes, sort and print the resulting words in alphabetical order.
try:
    fhand=open('romeo.txt','r')
except:
    print('File not present')
    quit()
result = list()

for line in fhand:
    words=line.split()
    for w in words:
        if w not in result:
            result.append(w)
result.sort()
print(result)

#print(result.sort())          WHY THIS PRINT None??
