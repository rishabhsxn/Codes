import urllib.request, urllib.parse, urllib.error
import ssl
import xml.etree.ElementTree as ET

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter location: ')
print('Retrieving',url)
fhand = urllib.request.urlopen(url, context=ctx)
data = fhand.read()
print('Retrieved',len(data),'characters')
# print(data)
stuff = ET.fromstring(data)
l = stuff.findall('comments/comment')

sum = 0
count = 0
for item in l:
    sum = sum + int(item.find('count').text)
    count = count + 1
print('Count:',count)
print('Sum:',sum)
