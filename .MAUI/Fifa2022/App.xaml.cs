using Fifa2022.MVVM.Views;

namespace Fifa2022;

public partial class App : Application
{
	public App()
	{
		InitializeComponent();

		MainPage = new AppShell();
	}
}
