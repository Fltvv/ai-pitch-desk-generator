from pprint import pprint

import sqlalchemy
import pymysql


class SqlClass:
    # за ссылкой на базу данных обращайтесь в телеграм (@mgarbuzenko)
    db = ""

    def __init__(self):
        self.engine = sqlalchemy.create_engine(self.db)
        self.connection = self.engine.connect()

    def get_base_column_names(self):
        print('QUERY')
        req = f'show fields from base'
        result = self.connection.execute(req).fetchall()
        result = [lst[0] for lst in result]
        return result

    def get_mybase_column_names(self):
        print('QUERY')
        req = f'show fields from mybase'
        result = self.connection.execute(req).fetchall()
        result = [lst[0] for lst in result]
        return result

    def get_all_startups_id(self):
        print('QUERY')
        req = f'SELECT id from base where 1=1'
        result = self.connection.execute(req).fetchall()
        result = [lst[0] for lst in result]
        return result

    def get_value_from_base(self, column_name, id_startup):
        print('QUERY')
        req = f'SELECT {column_name} FROM base where id={id_startup} LIMIT 1'
        result = self.connection.execute(req).fetchall()
        return str(result[0][0])

    def get_value_from_mybase(self, column_name, id_startup):
        print('QUERY')
        req = f'SELECT {column_name} FROM mybase where id={id_startup} LIMIT 1'
        result = self.connection.execute(req).fetchall()
        return str(result[0][0])

    def get_id_to_create_presentation(self):
        print('QUERY')
        req = f'SELECT id FROM base WHERE img_grisha=1 AND img_dima=0 LIMIT 1'
        result = self.connection.execute(req).fetchall()
        return result

    def update_table_base(self, id_startup):
        req = f'UPDATE base SET img_dima=1 WHERE id={id_startup}'
        result = self.connection.execute(req)
        return result
