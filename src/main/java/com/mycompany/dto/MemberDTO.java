package com.mycompany.dto;

public class MemberDTO {
	private String memberId;
	private String memberPasswd;
	private String memberName;
	private String memberPfimg;
	
	
	public MemberDTO() {
		// TODO Auto-generated constructor stub
	}

	public String getMemberId() {
		return memberId;
	}
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}

	public String getMemberPasswd() {
		return memberPasswd;
	}
	public void setMemberPasswd(String memberPasswd) {
		this.memberPasswd = memberPasswd;
	}

	public String getMemberName() {
		return memberName;
	}

	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}

	public String getMemberPfimg() {
		return memberPfimg;
	}

	public void setMemberPfimg(String memberPfimg) {
		this.memberPfimg = memberPfimg;
	}
	
	
}
