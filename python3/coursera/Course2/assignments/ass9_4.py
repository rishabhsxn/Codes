# Write a program to read through the mbox-short.txt and figure out who has sent the greatest number of mail messages.
# The program looks for 'From ' lines and takes the second word of those lines as the person who sent the mail.
# The program creates a Python dictionary that maps the sender's mail address to a count of the number of times they appear in the file.
# After the dictionary is produced, the program reads through the dictionary using a maximum loop to find the most prolific committer.

fname = input('Enter filename: ')

try:
    fhand = open(fname,'r')
except:
    print('File doesn\'t exist')
    quit()

counts = dict()
for line in fhand:
    if line.startswith('From '):
        word = line.split()
        #print(word[1])
        counts[word[1]] = counts.get(word[1],0)+1

#print(counts.values())
max=0

for k,v in counts.items():
    if v > max:
        max = v
        mailer = k

print(mailer,max)
