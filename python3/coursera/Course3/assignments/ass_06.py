import urllib.request, urllib.parse, urllib.error
import ssl
import json

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter location: ')
print('Retrieving',url)
fhand = urllib.request.urlopen(url, context=ctx)
data = fhand.read().decode()
print('Retrieved',len(data),'characters')

js = json.loads(data)

sum = 0
for x in js['comments']:
    sum = sum + int(x['count'])

count = len(js['comments'])

print('Count:',count)
print('Sum:',sum)
