﻿using SQLLiteDemo.MVVM.Models;
using SQLLiteDemo.MVVM.Views;
using SQLLiteDemo.Repositories;

namespace SQLLiteDemo;

public partial class App : Application
{
	//public static CustomerRepository CustomerRepo { get; private set; }
	public static BaseRepository<Customer> CustomerRepo { get; private set; }
	public static BaseRepository<Order> OrdersRepo { get; private set; }
	public static BaseRepository<Passport> PassportsRepo { get; private set; }
    public App(BaseRepository<Customer> repo, BaseRepository<Order> ordersRepo, BaseRepository<Passport> passportsRepo)
	{
		InitializeComponent();

		CustomerRepo = repo;
		OrdersRepo = ordersRepo;
        PassportsRepo = passportsRepo;

        MainPage = new MainPage();
	}
}