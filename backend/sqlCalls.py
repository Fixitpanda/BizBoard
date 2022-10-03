import mysql.connector

try:
    connection = mysql.connector.connect(host="10.0.0.42",
                                         user="root",
                                         passwd="123456789",
                                         database="bizBoard",
                                         )  # #autocommit=True

    # Get all posts from database

    cur = connection.cursor()
    print('MySQL server is connected')


    class getPosts:
        cur.execute('''SELECT * FROM posts''')
        row_headers = [x[0] for x in cur.description]  # this will extract row headers
        rv = cur.fetchall()
        json_data = []
        counter = 0
        for result in rv:
            json_data.append(dict(zip(row_headers, result)))
            counter += 1


    class getPostById:
        cur.execute('''SELECT * FROM posts''')  # WHERE id=10000002
        row_headers = [x[0] for x in cur.description]  # this will extract row headers
        rv = cur.fetchall()
        json_data = []
        counter = 0
        for result in rv:
            json_data.append(dict(zip(row_headers, result)))
            counter += 1


except mysql.connector.Error as error:
    print("Failed to insert record into Laptop table {}".format(error))

finally:
    if connection.is_connected():
        connection.close()
        print("MySQL connection is closed")


def MySqlData():
    new_data = getPostById.json_data
    return new_data
