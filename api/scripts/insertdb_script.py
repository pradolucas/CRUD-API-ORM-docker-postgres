import requests
import json
import pandas as pd
import glob
import os 

base_url = "http://localhost:9001/"
headers = {
  'Content-Type': 'application/json'
}

file_path = os.path.dirname(os.path.realpath(__file__))
path = f"{file_path}/*.csv"

for i in range(0,2): ##two times to make sure
    for fname in glob.glob(path):
        print(f'\n{fname}')
        url = base_url+fname.split('/')[-1].split('.')[0]
        print(url)
        df = pd.read_csv(fname, delimiter=',')
        for user in df.to_dict("index").values():
            payload = json.dumps(user)
            print(user)
            response = requests.request("POST", url, headers=headers, data=payload)
            print(response.text)


