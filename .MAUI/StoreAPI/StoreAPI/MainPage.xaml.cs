using Debug = System.Diagnostics.Debug;

namespace StoreAPI;

public partial class MainPage : ContentPage
{
	RestService _restService;

	public MainPage()
	{
		InitializeComponent();
		_restService = new RestService();
	}

	async void OnBtnClicked(object sender, EventArgs e)
	{
		if(!string.IsNullOrWhiteSpace(_productEntry.Text))
		{
            ProductsData productsData = await _restService.GetProductsData(GenerateRequestURL(Constants.ProductsEndpoint));

			BindingContext = productsData;
		}
	}

	string GenerateRequestURL(string endPoint)
	{
		string requestUri = endPoint;
		requestUri += $"/{_productEntry.Text}";
		return requestUri;
	}
}

