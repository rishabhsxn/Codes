import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup

import ssl

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def traverser(url):
    print('Retrieving:',url)
    html = urllib.request.urlopen(url, context=ctx).read()
    soup = BeautifulSoup(html, 'html.parser')
    return soup

url = input('Enter - ')

try: count = int(input('Enter count: '))
except: quit()

try: position = int(input('Enter position: '))
except: quit()

soup = traverser(url)
tags = soup('a')

for i in range(0,count):
    tag = tags[position-1]
    url = tag.get('href',None)
    soup = traverser(url)
    tags = soup('a')
    if i==count-1:
        print(tag.contents[0])
