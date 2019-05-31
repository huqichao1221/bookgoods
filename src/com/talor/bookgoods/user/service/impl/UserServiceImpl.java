package com.talor.bookgoods.user.service.impl;

import com.talor.bookgoods.user.dao.UserDao;
import com.talor.bookgoods.user.dao.impl.UserDaoImpl;
import com.talor.bookgoods.user.service.UserService;

/**
 * @author Administrator
 *	User
 */
public class UserServiceImpl  implements UserService {

	UserDao userDao=new UserDaoImpl();
}
