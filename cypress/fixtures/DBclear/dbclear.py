import pymysql
#清理金融培育冒烟过程中新增的数据
db = pymysql.connect(host='192.168.10.100', user='xin_rong_tong', passwd='xrtong@PBC', db='xin_rong_tong')
cursor = db.cursor()
cursor.execute("SELECT * FROM financing_cultivate_task WHERE task_title = '新增测试' ")
db.commit()
data = cursor.fetchall()
print(data)  # 打印信息的条数
cursor.close()
db.close()