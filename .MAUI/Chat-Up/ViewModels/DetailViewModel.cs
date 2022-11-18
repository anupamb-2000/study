using Chat_Up.Models;
using Chat_Up.Services;
using Chat_Up.ViewModels.Base;
using System.Collections.ObjectModel;
using System.Windows.Input;

namespace Chat_Up.ViewModels
{
    public class DetailViewModel : ViewModelBase
    {
        User _user;
        ObservableCollection<Message> _messages;

        public User User
        {
            get { return _user; }
            set
            {
                _user = value;
                OnPropertyChanged();
            }
        }

        public ObservableCollection<Message> Messages
        {
            get { return _messages; }
            set
            {
                _messages = value;
                OnPropertyChanged();
            }
        }

        public ICommand BackCommand => new Command(OnBack);

        public override Task InitializeAsync(object navigationData)
        {
            if (navigationData is Message message)
            {
                User = message.Sender;
                Messages = new ObservableCollection<Message>(MessageService.Instance.GetMessages(User));
            }

            return base.InitializeAsync(navigationData);
        }

        void OnBack()
        {
            NavigationService.Instance.NavigateBackAsync();
        }
    }
}
