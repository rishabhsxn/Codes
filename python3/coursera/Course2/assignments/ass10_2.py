# Write a program to read through the mbox-short.txt and figure out the distribution by hour of the day for each of the messages.
# You can pull the hour out from the 'From ' line by finding the time and then splitting the string a second time using a colon.
# From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008
# Once you have accumulated the counts for each hour, print out the counts, sorted by hour as shown below.

fname = input('Enter filename: ')

try:
    fhand=open(fname,'r')
except:
    print('File does not exist')
    quit()

counts=dict()
max=0

for line in fhand:
    if line.startswith('From '):
        words = line.split()
        word = words[5]
        time = word.split(':')
        hour = time[0]
        counts[hour] = counts.get(hour,0) + 1

#for hr,c in counts.items():

sortedlist = sorted([(hr,c) for hr,c in counts.items()])
for hr,c in sortedlist:
    print(hr,c)
