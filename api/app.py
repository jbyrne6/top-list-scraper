import time
import os
from flask import Flask
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

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

