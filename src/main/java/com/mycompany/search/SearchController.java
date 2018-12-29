package com.mycompany.search;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SearchController {
	@RequestMapping("/search")
	public String searchPage(Model model) {
		return "search";
	} 
}
