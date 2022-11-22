namespace Fifa2022;

public partial class App : Application
{
    public IApiService ApiService { get; }
    public App(IApiService apiService)
	{
		InitializeComponent();

		ApiService = apiService;

        MainPage = new LoginPage();
	}

    public async Task Authenticate()
    {
        if (Preferences.ContainsKey("token"))
        {
            MainPage = new AppShell();
        }
        else
        {
            try
            {
                var loginResult = "" ;

                Preferences.Set("token", loginResult);

                

                App.Current.MainPage = new AppShell();
            }
            catch (Exception ex)
            {
                await MainPage.DisplayAlert("Error Logging in", ex.Message, "Ok");
                Console.WriteLine(ex.ToString());
            }
        }
    }

    public void Logout()
    {
        Preferences.Remove("token");
        Preferences.Remove("email");
        Preferences.Remove("username");
        MainPage = new LoginPage();
    }
}
