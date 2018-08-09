package com.test.ajax;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 题目-持久层
 * <p>name:QuestionDao<p>
 * <p>descrip:contact:472789018<p>
 * @author Anthony
 * @time 上午7:12:15
 */
public class QuestionDao {
	//选择题
	List<Question> MulChoQuestion = new ArrayList<Question>();
	//判断题
	List<Question> TorFQuestion = new ArrayList<Question>();
	//在构造器里模拟数据
	public QuestionDao() {
		//模拟数据库取选择题部分
		Map<String,String> MulChoitem1 = new HashMap<String, String>();
		MulChoitem1.put("A","应用服务器");
		MulChoitem1.put("B","虚拟机");
		MulChoitem1.put("C","垃圾回收器");
		MulChoitem1.put("D","编译器");
		Question MulCho1 = new Question("1","在Java中，负责对字节代码解释执行的是",1,MulChoitem1,"B");
		MulChoQuestion.add(MulCho1);
		
		Map<String,String> MulChoitem2 = new HashMap<String, String>();
		MulChoitem2.put("A","5 4 1 3 2");
		MulChoitem2.put("B","2 3 4 1 5");
		MulChoitem2.put("C","1 5 4 3 2");
		MulChoitem2.put("D","2 3 1 4 5");
		Question MulCho2 = new Question("2","一个栈的输入序列为1 2 3 4 5，则下列序列中不可能是栈得输出序列的是",1,MulChoitem2,"C");
		MulChoQuestion.add(MulCho2);
		
		Map<String,String> MulChoitem3 = new HashMap<String, String>();
		MulChoitem3.put("A","是一种开源产品");
		MulChoitem3.put("B","是一种编程语言");
		MulChoitem3.put("C","是一种访问协议");
		MulChoitem3.put("D","是一种存储数据的目录");
		Question MulCho3 = new Question("3","LDAP是什么?",1,MulChoitem3,"D");
		MulChoQuestion.add(MulCho3);
		
		Map<String,String> MulChoitem4 = new HashMap<String, String>();
		MulChoitem4.put("A","只能在基础表中有select权限");
		MulChoitem4.put("B","在视图中需要有select权限");
		MulChoitem4.put("C","基础表中必须有数据");
		MulChoitem4.put("D","基础表必须在同一个 用户模式中");
		Question MulCho4 = new Question("4","要想在你的视图上成功的执行查询需要做什么",1,MulChoitem4,"B");
		MulChoQuestion.add(MulCho4);
		
		Map<String,String> MulChoitem5 = new HashMap<String, String>();
		MulChoitem5.put("A","4000");
		MulChoitem5.put("B","3000");
		MulChoitem5.put("C","1000");
		MulChoitem5.put("D","2000");
		Question MulCho5 = new Question("5","Oracle中VARCHAR2类型的最大长度是",1,MulChoitem5,"A");
		MulChoQuestion.add(MulCho5);
		//模拟数据库取判断题部分,由于判断题的止只有两个固定的选项，所以只用一个item就够了
		Map<String,String> TorFitemall = new HashMap<String, String>();
		TorFitemall.put("A", "对");
		TorFitemall.put("B", "错");
		Question TorF1 = new Question("1","weblogic中发布的ejb文件一定包含ejb-jar.xml",2,TorFitemall,"A");
		TorFQuestion.add(TorF1);
		Question TorF2 = new Question("2","Hashtable是同步的，而HashMap不是同步的。所以不要求同步的时候，用HashMap的效率较高",2,TorFitemall,"A");
		TorFQuestion.add(TorF2);
		Question TorF3 = new Question("3","Apache是一个纯粹的web服务器，支持SSL",2,TorFitemall,"A");
		TorFQuestion.add(TorF3);
		Question TorF4 = new Question("4","在Java中对象可以赋值，只要使用赋值号（等号）即可，相当于生成了一个属性与赋值对象相同的新对象",2,TorFitemall,"B");
		TorFQuestion.add(TorF4);
		Question TorF5 = new Question("5","没有implements Serializable，就一定不能通过rmi(包括ejb)提供远程调用",2,TorFitemall,"A");
		TorFQuestion.add(TorF5);
	}
	
	public List<Question> getAllMulChoQuestion(){
			return MulChoQuestion;
	}
	
	public List<Question> getAllTorFQuestion(){
			return TorFQuestion;
	}
}
