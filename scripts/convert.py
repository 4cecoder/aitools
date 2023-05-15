import csv
import json

csvfile = open('huge.csv', 'r')
jsonfile = open('jason.json', 'w')

fieldnames = ('Name', 'Direct Link', 'Hashtags', 'Description', 'Pricing model', 'Coupon', 'Has Coupon', 'Has Free Trial', 'Realated Videos')
reader = csv.DictReader(csvfile, fieldnames)

for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write('\n')
