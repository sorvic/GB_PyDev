import requests
from datetime import datetime
from decimal import *
import sys


def currency_market(currency):
    response = requests.get('http://www.cbr.ru/scripts/XML_daily.asp').text
    if currency in response:
        rub = response[response.find('<Value>', response.find(currency)) + 7:response.find('</Value>', response.find(currency))]
        date = response[response.find('Date="') + 6:response.find('"', response.find('Date="') + 6)]
        date_new = list(reversed(date.split('.')))
        date_new = '-'.join(date_new)
        rub_new = rub.replace(',', '.')
        return f"Курс {currency} валюты на {datetime.strptime(date_new, '%Y-%m-%d')} = {Decimal(rub_new)}"
    else:
        return None

# Вывыел во внешний файл, чтобы можно было запускать из командной строки только код 5 подзадания
if __name__ == '__main__':
    print(currency_market(sys.argv[1]))