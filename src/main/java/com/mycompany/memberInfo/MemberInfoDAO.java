package com.mycompany.memberInfo;

import com.mycompany.dto.MemberDTO;

public interface MemberInfoDAO {
	public MemberDTO searchUser(String memberName);
}
