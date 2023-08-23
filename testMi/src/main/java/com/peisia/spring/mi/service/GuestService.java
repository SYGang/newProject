package com.peisia.spring.mi.service;


import org.springframework.ui.Model;

import com.peisia.spring.mi.vo.GuestVO;

public interface GuestService {
	
		
//		public HashMap<String, Object> getList(int currentPage);
		
		public GuestVO read(long bno);

		public void del(long bno);
		
		public void write(GuestVO gvo);

		public void modify(GuestVO gvo);

		public Model getList(Model m, int currentPage);
	}
