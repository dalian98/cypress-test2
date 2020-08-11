import pymysql
#清理注册中生成的数据
db = pymysql.connect(host='192.168.10.100', user='xin_rong_tong', passwd='xrtong@PBC', db='xin_rong_tong')
cursor = db.cursor()
cursor.execute("update `user` set status_flag = 0 WHERE user_name = '91130423746735927Q'")
db.commit()
# data = cursor.fetchall()
# print(data)  # 打印信息的条数
cursor.close()
db.close()