# RUN 
```shell
docker-compose up
```

# Update db
if you want to modify the db after the container is up, run:

```python
python3 api/scripts/insertdb_script.py
```
or 

```shell
docker exec -i postgres-container postgres < db/script.sql
```


