using SQLLiteDemo.MVVM.ViewModels;

namespace SQLLiteDemo.MVVM.Views;

public partial class MainPage : ContentPage
{
	public MainPage()
	{
		InitializeComponent();
		BindingContext = new MainPageViewModel();
	}
}