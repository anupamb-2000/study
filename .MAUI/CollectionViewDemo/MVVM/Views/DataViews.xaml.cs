using CollectionViewDemo.MVVM.ViewModels;

namespace CollectionViewDemo.MVVM.Views;

public partial class DataViews : ContentPage
{
	public DataViews()
	{
		InitializeComponent();
		BindingContext = new DataViewModel();
	}
}