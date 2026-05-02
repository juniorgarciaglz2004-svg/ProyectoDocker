### Como restaurar un fichero de sql 

Para restaurar la base de datos basado en un fichero de backup/dump ejecutar el siguiente comando en la terminal: 

```
docker exec -i bd sh -c 'MYSQL_PWD=<contraseña> mysql -u <usuario> test < /backups/<fichero_de_backup>'
```
