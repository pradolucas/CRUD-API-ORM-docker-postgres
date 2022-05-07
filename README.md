# RUN 
```shell
docker-compose up
```

# Update db
if you want to modify the db after the container is up, run:

```shell
docker exec -i postgres-container postgres < ./db/script.sql
```

