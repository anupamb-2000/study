﻿using Chat_Up.Models;
using Chat_Up.Services;
using Chat_Up.ViewModels.Base;
using System.Collections.ObjectModel;
using System.Windows.Input;

namespace Chat_Up.ViewModels
{
    public class HomeViewModel : ViewModelBase
    {
        ObservableCollection<User> _users;
        ObservableCollection<Message> _recentChat;

        public HomeViewModel()
        {
            LoadData();
        }

        public ObservableCollection<User> Users
        {
            get { return _users; }
            set
            {
                _users = value;
                OnPropertyChanged();
            }
        }

        public ObservableCollection<Message> RecentChat
        {
            get { return _recentChat; }
            set
            {
                _recentChat = value;
                OnPropertyChanged();
            }
        }

        public ICommand DetailCommand => new Command<object>(OnNavigate);

        void LoadData()
        {
            Users = new ObservableCollection<User>(MessageService.Instance.GetUsers());
            RecentChat = new ObservableCollection<Message>(MessageService.Instance.GetChats());
        }

        void OnNavigate(object parameter)
        {
            NavigationService.Instance.NavigateToAsync<DetailViewModel>(parameter);
        }
    }
}
