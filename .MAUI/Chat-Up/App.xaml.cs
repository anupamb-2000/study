using Chat_Up.Views;

namespace Chat_Up;

public partial class App : Application
{
	public App()
	{
		InitializeComponent();

		MainPage = new HomeView();
	}
}
