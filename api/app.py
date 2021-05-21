import time
import os
from flask import Flask
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import imgkit
import pdfkit
from googlesearch import search


app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/gbaTest')
def get_top_25_gba():
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    # options.add_argument('window-size=1200x600')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')

    driver = webdriver.Chrome(chrome_options=options)
    #If the chromedriver is not set in the PATH environment variable, specify the chromedriver location with the executable_path option.

    url = "https://www.gamesradar.com/best-gba-games/"

    driver.get(url)
    # browser.save_screenshot("/screenshots/Website.png")
    # browser.quit()
    return {'Chromedriver Path' : driver.page_source}

# downloads image of url sent as parameter
# @app.route('/siteToImage/')
# @app.route('/siteToImage/<path:siteUrl>')
def site_to_image(index, siteUrl):
    options = {
        # 'page-size': 'Letter',
        # 'margin-top': '0.75in',
        # 'margin-right': '0.75in',
        # 'margin-bottom': '0.75in',
        # 'margin-left': '0.75in',
        # 'encoding': "UTF-8",
        # 'custom-header': [
        #     ('Accept-Encoding', 'gzip')
        # ],
        # 'cookie': [
        #     ('cookie-empty-value', '""')
        #     ('cookie-name1', 'cookie-value1'),
        #     ('cookie-name2', 'cookie-value2'),
        # ],
        # 'no-outline': None
    }
    # image = imgkit.from_url(siteUrl, f'./screenshots/{name}.jpg')
    pdf = pdfkit.from_url(siteUrl, f'./screenshots/{index}.pdf', options=options)
    # image = imgkit.from_url(siteUrl, None)
    return "downloaded image from " + siteUrl

def listToString(s): 
    
    # initialize an empty string
    str1 = "" 
    
    # traverse in the string  
    for ele in s: 
        str1 += ele  

    # return string  
    return str1 

@app.route('/googleSearch/<searchTerm>')
def google_search(searchTerm):
    # get top n urls
    numResults = 2
    searchResults = search(searchTerm, num_results=numResults)
    for index, url in enumerate(searchResults):
        print(f'{index}: {url}')
        site_to_image(index, url)

    return listToString(searchResults)