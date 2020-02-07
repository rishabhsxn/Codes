# import re
#
# fname = input('Enter Filename: ')
# try: fhand = open(fname,'r')
# except:
#     print('File not found')
#     quit()
#
# sum=0
#
# for line in fhand:
#     num = re.findall('[0-9]+',line)
#     if len(num)!=0:
#         for x in num:
#             sum = sum + int(x)
# print(sum)


#short method using list comprehension
import re
fname = 'actual_data.txt'
try: fhand = open(fname,'r')
except:
    print('File not found')
    quit()

print(sum( [int(x) for x in re.findall('[0-9]+',fhand.read())] ))
