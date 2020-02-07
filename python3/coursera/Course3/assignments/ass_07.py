import json
import ssl
import urllib.request, urllib.parse, urllib.error

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

api_key = 42
serviceurl = 'http://py4e-data.dr-chuck.net/json?'

while True:
    address = input('Enter location: ')
    if len(address) < 1: break

    parms = dict()
    parms['address'] = address
    parms['key'] = api_key
    url = serviceurl + urllib.parse.urlencode(parms)

    print('Retrieving',url)
    connection = urllib.request.urlopen(url)
    data = connection.read().decode()
    print('Retrieved',len(data),'characters')

    try:
        js = json.loads(data)
    except:
        js = None

    if not js or 'status' not in js or js['status'] != 'OK':
        print('==== Failure To Retrieve ====')
        print(data)
        continue

    #print(json.dumps(js,indent = 2))

    print(js['results'][0]['place_id'])


# {
#   "results": [
#     {
#       "address_components": [
#         {
#           "long_name": "Boulder",
#           "short_name": "Boulder",
#           "types": [
#             "locality",
#             "political"
#           ]
#         },
#         {
#           "long_name": "Boulder County",
#           "short_name": "Boulder County",
#           "types": [
#             "administrative_area_level_2",
#             "political"
#           ]
#         },
#         {
#           "long_name": "Colorado",
#           "short_name": "CO",
#           "types": [
#             "administrative_area_level_1",
#             "political"
#           ]
#         },
#         {
#           "long_name": "United States",
#           "short_name": "US",
#           "types": [
#             "country",
#             "political"
#           ]
#         },
#         {
#           "long_name": "80309",
#           "short_name": "80309",
#           "types": [
#             "postal_code"
#           ]
#         }
#       ],
#       "formatted_address": "Boulder, CO 80309, USA",
#       "geometry": {
#         "location": {
#           "lat": 40.00758099999999,
#           "lng": -105.2659417
#         },
#         "location_type": "GEOMETRIC_CENTER",
#         "viewport": {
#           "northeast": {
#             "lat": 40.00892998029149,
#             "lng": -105.2645927197085
#           },
#           "southwest": {
#             "lat": 40.0062320197085,
#             "lng": -105.2672906802915
#           }
#         }
#       },
#       "place_id": "ChIJwR6cajTsa4cR2TH0qKTVKAM",
#       "plus_code": {
#         "compound_code": "2P5M+2J Boulder, Colorado, United States",
#         "global_code": "85GP2P5M+2J"
#       },
#       "types": [
#         "establishment",
#         "point_of_interest",
#         "university"
#       ]
#     }
#   ],
#   "status": "OK"
# }
