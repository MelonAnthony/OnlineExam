package com.test.ajax;

import java.util.Map;

/**
 * 题目
 * <p>name:Question<p>
 * <p>descrip:contact:472789018<p>
 * @author Anthony
 * @time 上午6:59:16
 */
public class Question {
	//序号
	private String serialNum;
	//题干
	private String dry;
	//分值
	private Integer value;
	//选项
	private Map<String,String> item;
	//答案
	private String answer;
	
	public Question(String serialNum,String dry,Integer value,Map<String,String> item,String answer) {
		this.serialNum = serialNum;
		this.dry = dry;
		this.value = value;
		this.item = item;
		this.answer = answer;
	}
	
	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public String getSerialNum() {
		return serialNum;
	}
	public void setSerialNum(String serialNum) {
		this.serialNum = serialNum;
	}
	public String getDry() {
		return dry;
	}
	public void setDry(String dry) {
		this.dry = dry;
	}
	public Integer getValue() {
		return value;
	}
	public void setValue(Integer value) {
		this.value = value;
	}
	public Map<String, String> getItem() {
		return item;
	}
	public void setItem(Map<String, String> item) {
		this.item = item;
	}
}
