package com.mycompany.login;

import com.mycompany.dto.MemberDTO;

public interface LoginDAO {
	public MemberDTO findUser(MemberDTO member); 
	public void joinPro(MemberDTO member);
}
