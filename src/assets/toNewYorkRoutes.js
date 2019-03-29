import stations from '../constants/stations';

const trainRoutes = [
  {
    trainNumber: '3806',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 348 },
      { station: stations.HAMILTON, departAt: 354 },
      { station: stations.PRINCETON_JUNCTION, departAt: 400 },
      { station: stations.NEW_BRUNSWICK, departAt: 414 },
      { station: stations.EDISON, departAt: 418 },
      { station: stations.METUCHEN, departAt: 423 },
      { station: stations.METROPARK, departAt: 427 },
      { station: stations.RAHWAY, departAt: 434 },
      { station: stations.LINDEN, departAt: 438 },
      { station: stations.ELIZABETH, departAt: 444 },
      { station: stations.NEWARK_AIRPORT, departAt: 448 },
      { station: stations.NEWARK_PENN, departAt: 454 },
      { station: stations.SECAUCUS, departAt: 501 },
      { station: stations.NEW_YORK, departAt: 521 }
    ]
  },
  {
    trainNumber: '3808',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 422 },
      { station: stations.HAMILTON, departAt: 428 },
      { station: stations.PRINCETON_JUNCTION, departAt: 435 },
      { station: stations.NEW_BRUNSWICK, departAt: 449 },
      { station: stations.METROPARK, departAt: 458 },
      { station: stations.NEWARK_AIRPORT, departAt: 512 },
      { station: stations.NEWARK_PENN, departAt: 519 },
      { station: stations.SECAUCUS, departAt: 527 },
      { station: stations.NEW_YORK, departAt: 540 }
    ]
  },
  {
    trainNumber: '3204',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 521 },
      { station: stations.NEWARK_AIRPORT, departAt: 531 },
      { station: stations.NEWARK_PENN, departAt: 537 },
      { station: stations.SECAUCUS, departAt: 544 },
      { station: stations.NEW_YORK, departAt: 558 }
    ]
  },
  {
    trainNumber: '3700',
    isWeekend: false,
    routes: [
      { station: stations.JERSEY_AVENUE, departAt: 501 },
      { station: stations.NEW_BRUNSWICK, departAt: 506 },
      { station: stations.EDISON, departAt: 510 },
      { station: stations.METUCHEN, departAt: 515 },
      { station: stations.METROPARK, departAt: 520 },
      { station: stations.RAHWAY, departAt: 526 },
      { station: stations.LINDEN, departAt: 529 },
      { station: stations.ELIZABETH, departAt: 535 },
      { station: stations.NORTH_ELIZABETH, departAt: 538 },
      { station: stations.NEWARK_AIRPORT, departAt: 541 },
      { station: stations.NEWARK_PENN, departAt: 547 },
      { station: stations.SECAUCUS, departAt: 554 },
      { station: stations.NEW_YORK, departAt: 607 }
    ]
  },
  {
    trainNumber: '3910',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 506 },
      { station: stations.HAMILTON, departAt: 513 },
      { station: stations.PRINCETON_JUNCTION, departAt: 520 },
      { station: stations.NEWARK_PENN, departAt: 554 },
      { station: stations.NEW_YORK, departAt: 612 }
    ]
  },
  {
    trainNumber: '3810',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 456 },
      { station: stations.HAMILTON, departAt: 502 },
      { station: stations.PRINCETON_JUNCTION, departAt: 509 },
      { station: stations.NEW_BRUNSWICK, departAt: 523 },
      { station: stations.EDISON, departAt: 528 },
      { station: stations.METUCHEN, departAt: 533 },
      { station: stations.METROPARK, departAt: 537 },
      { station: stations.NEWARK_AIRPORT, departAt: 551 },
      { station: stations.NEWARK_PENN, departAt: 557 },
      { station: stations.SECAUCUS, departAt: 605 },
      { station: stations.NEW_YORK, departAt: 618 }
    ]
  },
  {
    trainNumber: '3208',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 548 },
      { station: stations.NEWARK_PENN, departAt: 602 },
      { station: stations.SECAUCUS, departAt: 610 },
      { station: stations.NEW_YORK, departAt: 623 }
    ]
  },
  {
    trainNumber: '3702',
    isWeekend: false,
    routes: [
      { station: stations.JERSEY_AVENUE, departAt: 526 },
      { station: stations.NEW_BRUNSWICK, departAt: 534 },
      { station: stations.EDISON, departAt: 538 },
      { station: stations.METUCHEN, departAt: 543 },
      { station: stations.METROPARK, departAt: 547 },
      { station: stations.RAHWAY, departAt: 554 },
      { station: stations.LINDEN, departAt: 558 },
      { station: stations.ELIZABETH, departAt: 604 },
      { station: stations.NORTH_ELIZABETH, departAt: 607 },
      { station: stations.NEWARK_AIRPORT, departAt: 610 },
      { station: stations.NEWARK_PENN, departAt: 617 },
      { station: stations.SECAUCUS, departAt: 625 },
      { station: stations.NEW_YORK, departAt: 638 }
    ]
  },
  {
    trainNumber: '3812',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 521 },
      { station: stations.HAMILTON, departAt: 527 },
      { station: stations.PRINCETON_JUNCTION, departAt: 534 },
      { station: stations.NEW_BRUNSWICK, departAt: 549 },
      { station: stations.EDISON, departAt: 553 },
      { station: stations.METUCHEN, departAt: 558 },
      { station: stations.METROPARK, departAt: 603 },
      { station: stations.RAHWAY, departAt: 611 },
      { station: stations.LINDEN, departAt: 616 },
      { station: stations.ELIZABETH, departAt: 622 },
      { station: stations.NORTH_ELIZABETH, departAt: 625 },
      { station: stations.NEWARK_AIRPORT, departAt: 629 },
      { station: stations.NEWARK_PENN, departAt: 635 },
      { station: stations.NEW_YORK, departAt: 653 }
    ]
  },
  {
    trainNumber: '3704',
    isWeekend: false,
    routes: [
      { station: stations.JERSEY_AVENUE, departAt: 602 },
      { station: stations.NEW_BRUNSWICK, departAt: 609 },
      { station: stations.EDISON, departAt: 614 },
      { station: stations.METUCHEN, departAt: 620 },
      { station: stations.METROPARK, departAt: 625 },
      { station: stations.NEWARK_PENN, departAt: 643 },
      { station: stations.NEW_YORK, departAt: 701 }
    ]
  },
  {
    trainNumber: '3914',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 601 },
      { station: stations.HAMILTON, departAt: 607 },
      { station: stations.PRINCETON_JUNCTION, departAt: 615 },
      { station: stations.NEWARK_PENN, departAt: 648 },
      { station: stations.SECAUCUS, departAt: 656 },
      { station: stations.NEW_YORK, departAt: 709 }
    ]
  },
  {
    trainNumber: '3814',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 549 },
      { station: stations.HAMILTON, departAt: 556 },
      { station: stations.PRINCETON_JUNCTION, departAt: 604 },
      { station: stations.NEW_BRUNSWICK, departAt: 619 },
      { station: stations.EDISON, departAt: 624 },
      { station: stations.METUCHEN, departAt: 629 },
      { station: stations.METROPARK, departAt: 634 },
      { station: stations.NEWARK_PENN, departAt: 653 },
      { station: stations.SECAUCUS, departAt: 701 },
      { station: stations.NEW_YORK, departAt: 714 }
    ]
  },
  {
    trainNumber: '3212',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 638 },
      { station: stations.LINDEN, departAt: 642 },
      { station: stations.ELIZABETH, departAt: 649 },
      { station: stations.NORTH_ELIZABETH, departAt: 651 },
      { station: stations.NEWARK_AIRPORT, departAt: 655 },
      { station: stations.NEWARK_PENN, departAt: 701 },
      { station: stations.SECAUCUS, departAt: 709 },
      { station: stations.NEW_YORK, departAt: 722 }
    ]
  },
  {
    trainNumber: '3706',
    isWeekend: false,
    routes: [
      { station: stations.JERSEY_AVENUE, departAt: 625 },
      { station: stations.NEW_BRUNSWICK, departAt: 632 },
      { station: stations.EDISON, departAt: 636 },
      { station: stations.METUCHEN, departAt: 642 },
      { station: stations.METROPARK, departAt: 647 },
      { station: stations.NEWARK_PENN, departAt: 706 },
      { station: stations.NEW_YORK, departAt: 724 }
    ]
  },
  {
    trainNumber: '3918',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 623 },
      { station: stations.HAMILTON, departAt: 630 },
      { station: stations.PRINCETON_JUNCTION, departAt: 637},
      { station: stations.NEWARK_PENN, departAt: 712 },
      { station: stations.SECAUCUS, departAt: 719 },
      { station: stations.NEW_YORK, departAt: 734 }
    ]
  },
  {
    trainNumber: '3818',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 611 },
      { station: stations.HAMILTON, departAt: 617 },
      { station: stations.PRINCETON_JUNCTION, departAt: 625 },
      { station: stations.NEW_BRUNSWICK, departAt: 640 },
      { station: stations.EDISON, departAt: 645 },
      { station: stations.METUCHEN, departAt: 650 },
      { station: stations.METROPARK, departAt: 655 },
      { station: stations.RAHWAY, departAt: 703 },
      { station: stations.LINDEN, departAt: 708 },
      { station: stations.ELIZABETH, departAt: 714 },
      { station: stations.NORTH_ELIZABETH, departAt: 717 },
      { station: stations.NEWARK_AIRPORT, departAt: 722 },
      { station: stations.NEWARK_PENN, departAt: 729 },
      { station: stations.SECAUCUS, departAt: 737 },
      { station: stations.NEW_YORK, departAt: 750 }
    ]
  },
  {
    trainNumber: '3708',
    isWeekend: false,
    routes: [
      { station: stations.JERSEY_AVENUE, departAt: 652 },
      { station: stations.NEW_BRUNSWICK, departAt: 659 },
      { station: stations.EDISON, departAt: 704 },
      { station: stations.METUCHEN, departAt: 710 },
      { station: stations.METROPARK, departAt: 715 },
      { station: stations.NEWARK_PENN, departAt: 734 },
      { station: stations.SECAUCUS, departAt: 741 },
      { station: stations.NEW_YORK, departAt: 754 }
    ]
  },
  {
    trainNumber: '3920',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 647 },
      { station: stations.HAMILTON, departAt: 654 },
      { station: stations.PRINCETON_JUNCTION, departAt: 702 },
      { station: stations.NEWARK_PENN, departAt: 737 },
      { station: stations.SECAUCUS, departAt: 744 },
      { station: stations.NEW_YORK, departAt: 758 }
    ]
  },
  {
    trainNumber: '3124',
    isWeekend: false,
    routes: [
      { station: stations.NEW_BRUNSWICK, departAt: 710 },
      { station: stations.EDISON, departAt: 715 },
      { station: stations.METUCHEN, departAt: 721 },
      { station: stations.METROPARK, departAt: 726 },
      { station: stations.NEWARK_PENN, departAt: 747 },
      { station: stations.NEW_YORK, departAt: 808 }
    ]
  },
  {
    trainNumber: '3922',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 659 },
      { station: stations.HAMILTON, departAt: 706 },
      { station: stations.PRINCETON_JUNCTION, departAt: 713 },
      { station: stations.NEWARK_PENN, departAt: 751 },
      { station: stations.SECAUCUS, departAt: 759 },
      { station: stations.NEW_YORK, departAt: 813 }
    ]
  },
  {
    trainNumber: '3502',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 728 },
      { station: stations.LINDEN, departAt: 734 },
      { station: stations.ELIZABETH, departAt: 741 },
      { station: stations.NORTH_ELIZABETH, departAt: 745 },
      { station: stations.NEWARK_PENN, departAt: 755 },
      { station: stations.SECAUCUS, departAt: 803 },
      { station: stations.NEW_YORK, departAt: 818 }
    ]
  },
  {
    trainNumber: '3710',
    isWeekend: false,
    routes: [
      { station: stations.JERSEY_AVENUE, departAt: 717},
      { station: stations.NEW_BRUNSWICK, departAt: 723 },
      { station: stations.EDISON, departAt: 729 },
      { station: stations.METUCHEN, departAt: 735 },
      { station: stations.METROPARK, departAt: 741 },
      { station: stations.NEWARK_PENN, departAt: 800 },
      { station: stations.SECAUCUS, departAt: 809 },
      { station: stations.NEW_YORK, departAt: 823 }
    ]
  },
  {
    trainNumber: '3924',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 712 },
      { station: stations.HAMILTON, departAt: 719 },
      { station: stations.PRINCETON_JUNCTION, departAt: 727 },
      { station: stations.NEWARK_PENN, departAt: 806 },
      { station: stations.SECAUCUS, departAt: 814 },
      { station: stations.NEW_YORK, departAt: 828 }
    ]
  },
  {
    trainNumber: '3126',
    isWeekend: false,
    routes: [
      { station: stations.NEW_BRUNSWICK, departAt: 734 },
      { station: stations.EDISON, departAt: 739 },
      { station: stations.METUCHEN, departAt: 744 },
      { station: stations.METROPARK, departAt: 750 },
      { station: stations.NEWARK_AIRPORT, departAt: 803 },
      { station: stations.NEWARK_PENN, departAt: 810 },
      { station: stations.SECAUCUS, departAt: 817 },
      { station: stations.NEW_YORK, departAt: 832 }
    ]
  },
  {
    trainNumber: '3712',
    isWeekend: false,
    routes: [
      { station: stations.JERSEY_AVENUE, departAt: 739 },
      { station: stations.NEW_BRUNSWICK, departAt: 744 },
      { station: stations.EDISON, departAt: 749 },
      { station: stations.METUCHEN, departAt: 755 },
      { station: stations.METROPARK, departAt: 800 },
      { station: stations.NEWARK_PENN, departAt: 816 },
      { station: stations.SECAUCUS, departAt: 823 },
      { station: stations.NEW_YORK, departAt: 836 }
    ]
  },
  {
    trainNumber: '3926',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 731 },
      { station: stations.HAMILTON, departAt: 738 },
      { station: stations.PRINCETON_JUNCTION, departAt: 745 },
      { station: stations.NEWARK_PENN, departAt: 822 },
      { station: stations.SECAUCUS, departAt: 830 },
      { station: stations.NEW_YORK, departAt: 846 }
    ]
  },
  {
    trainNumber: '3504',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 800 },
      { station: stations.LINDEN, departAt: 805 },
      { station: stations.ELIZABETH, departAt: 813 },
      { station: stations.NORTH_ELIZABETH, departAt: 816 },
      { station: stations.NEWARK_AIRPORT, departAt: 820 },
      { station: stations.NEWARK_PENN, departAt: 827 },
      { station: stations.SECAUCUS, departAt: 835 },
      { station: stations.NEW_YORK, departAt: 848 }
    ]
  },
  {
    trainNumber: '3714',
    isWeekend: false,
    routes: [
      { station: stations.JERSEY_AVENUE, departAt: 755 },
      { station: stations.NEW_BRUNSWICK, departAt: 801 },
      { station: stations.EDISON, departAt: 806 },
      { station: stations.METUCHEN, departAt: 812 },
      { station: stations.METROPARK, departAt: 817 },
      { station: stations.NEWARK_PENN, departAt: 835 },
      { station: stations.SECAUCUS, departAt: 843 },
      { station: stations.NEW_YORK, departAt: 857 }
    ]
  },
  {
    trainNumber: '3828',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 723 },
      { station: stations.HAMILTON, departAt: 729 },
      { station: stations.PRINCETON_JUNCTION, departAt: 736 },
      { station: stations.NEW_BRUNSWICK, departAt: 754 },
      { station: stations.EDISON, departAt: 759 },
      { station: stations.METUCHEN, departAt: 804 },
      { station: stations.METROPARK, departAt: 809 },
      { station: stations.RAHWAY, departAt: 818 },
      { station: stations.LINDEN, departAt: 823 },
      { station: stations.ELIZABETH, departAt: 832 },
      { station: stations.NORTH_ELIZABETH, departAt: 835 },
      { station: stations.NEWARK_AIRPORT, departAt: 838 },
      { station: stations.NEWARK_PENN, departAt: 845 },
      { station: stations.SECAUCUS, departAt: 853 },
      { station: stations.NEW_YORK, departAt: 906 }
    ]
  },
  {
    trainNumber: '3928',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 750 },
      { station: stations.HAMILTON, departAt: 757 },
      { station: stations.PRINCETON_JUNCTION, departAt: 805 },
      { station: stations.NEW_BRUNSWICK, departAt: 821 },
      { station: stations.METROPARK, departAt: 831 },
      { station: stations.NEWARK_AIRPORT, departAt: 844 },
      { station: stations.NEWARK_PENN, departAt: 851 },
      { station: stations.SECAUCUS, departAt: 900 },
      { station: stations.NEW_YORK, departAt: 914 }
    ]
  },
  {
    trainNumber: '3506',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 837 },
      { station: stations.LINDEN, departAt: 841 },
      { station: stations.ELIZABETH, departAt: 847 },
      { station: stations.NORTH_ELIZABETH, departAt: 850 },
      { station: stations.NEWARK_AIRPORT, departAt: 853 },
      { station: stations.NEWARK_PENN, departAt: 859 },
      { station: stations.NEW_YORK, departAt: 918 }
    ]
  },
  {
    trainNumber: '3930',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 811 },
      { station: stations.HAMILTON, departAt: 818 },
      { station: stations.PRINCETON_JUNCTION, departAt: 825 },
      { station: stations.NEWARK_PENN, departAt: 901 },
      { station: stations.SECAUCUS, departAt: 908 },
      { station: stations.NEW_YORK, departAt: 922 }
    ]
  },
  {
    trainNumber: '3716',
    isWeekend: false,
    routes: [
      { station: stations.JERSEY_AVENUE, departAt: 819 },
      { station: stations.NEW_BRUNSWICK, departAt: 827 },
      { station: stations.EDISON, departAt: 832 },
      { station: stations.METUCHEN, departAt: 837 },
      { station: stations.METROPARK, departAt: 842 },
      { station: stations.NEWARK_AIRPORT, departAt: 857 },
      { station: stations.NEWARK_PENN, departAt: 903 },
      { station: stations.SECAUCUS, departAt: 911 },
      { station: stations.NEW_YORK, departAt: 924 }
    ]
  },
  {
    trainNumber: '3830',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 800 },
      { station: stations.HAMILTON, departAt: 807 },
      { station: stations.PRINCETON_JUNCTION, departAt: 814 },
      { station: stations.NEW_BRUNSWICK, departAt: 835 },
      { station: stations.EDISON, departAt: 839 },
      { station: stations.METUCHEN, departAt: 844 },
      { station: stations.METROPARK, departAt: 848 },
      { station: stations.RAHWAY, departAt: 854 },
      { station: stations.LINDEN, departAt: 858 },
      { station: stations.ELIZABETH, departAt: 904 },
      { station: stations.NORTH_ELIZABETH, departAt: 907 },
      { station: stations.NEWARK_AIRPORT, departAt: 911 },
      { station: stations.NEWARK_PENN, departAt: 916 },
      { station: stations.SECAUCUS, departAt: 924 },
      { station: stations.NEW_YORK, departAt: 937 }
    ]
  },
  {
    trainNumber: '3932',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 826 },
      { station: stations.HAMILTON, departAt: 833 },
      { station: stations.PRINCETON_JUNCTION, departAt: 841 },
      { station: stations.NEW_BRUNSWICK, departAt: 855 },
      { station: stations.NEWARK_PENN, departAt: 919 },
      { station: stations.SECAUCUS, departAt: 926 },
      { station: stations.NEW_YORK, departAt: 940 }
    ]
  },
  {
    trainNumber: '3718',
    isWeekend: false,
    routes: [
      { station: stations.JERSEY_AVENUE, departAt: 840 },
      { station: stations.NEW_BRUNSWICK, departAt: 846 },
      { station: stations.EDISON, departAt: 850 },
      { station: stations.METUCHEN, departAt: 856 },
      { station: stations.METROPARK, departAt: 901 },
      { station: stations.NEWARK_AIRPORT, departAt: 915 },
      { station: stations.NEWARK_PENN, departAt: 921 },
      { station: stations.SECAUCUS, departAt: 929 },
      { station: stations.NEW_YORK, departAt: 944 }
    ]
  },
  {
    trainNumber: '3720',
    isWeekend: false,
    routes: [
      { station: stations.JERSEY_AVENUE, departAt: 857 },
      { station: stations.NEW_BRUNSWICK, departAt: 903 },
      { station: stations.EDISON, departAt: 907 },
      { station: stations.METUCHEN, departAt: 912 },
      { station: stations.METROPARK, departAt: 917 },
      { station: stations.NEWARK_AIRPORT, departAt: 931 },
      { station: stations.NEWARK_PENN, departAt: 937 },
      { station: stations.SECAUCUS, departAt: 944 },
      { station: stations.NEW_YORK, departAt: 957 }
    ]
  },
  {
    trainNumber: '3934',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 856 },
      { station: stations.HAMILTON, departAt: 903 },
      { station: stations.PRINCETON_JUNCTION, departAt: 910 },
      { station: stations.NEW_BRUNSWICK, departAt: 924 },
      { station: stations.NEWARK_AIRPORT, departAt: 946 },
      { station: stations.NEWARK_PENN, departAt: 953 },
      { station: stations.SECAUCUS, departAt: 1000 },
      { station: stations.NEW_YORK, departAt: 1013 }
    ]
  },
  {
    trainNumber: '3508',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 934 },
      { station: stations.LINDEN, departAt: 938 },
      { station: stations.ELIZABETH, departAt: 945 },
      { station: stations.NORTH_ELIZABETH, departAt: 948 },
      { station: stations.NEWARK_AIRPORT, departAt: 951 },
      { station: stations.NEWARK_PENN, departAt: 957 },
      { station: stations.SECAUCUS, departAt: 1004 },
      { station: stations.NEW_YORK, departAt: 1017 }
    ]
  },
  {
    trainNumber: '3722',
    isWeekend: false,
    routes: [
      { station: stations.JERSEY_AVENUE, departAt: 925 },
      { station: stations.NEW_BRUNSWICK, departAt: 930 },
      { station: stations.EDISON, departAt: 934 },
      { station: stations.METUCHEN, departAt: 939 },
      { station: stations.METROPARK, departAt: 944 },
      { station: stations.RAHWAY, departAt: 950 },
      { station: stations.LINDEN, departAt: 954 },
      { station: stations.ELIZABETH, departAt: 1000 },
      { station: stations.NEWARK_AIRPORT, departAt: 1004 },
      { station: stations.NEWARK_PENN, departAt: 1010 },
      { station: stations.SECAUCUS, departAt: 1017 },
      { station: stations.NEW_YORK, departAt: 1030 }
    ]
  },
  {
    trainNumber: '3936',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 921 },
      { station: stations.HAMILTON, departAt: 927 },
      { station: stations.PRINCETON_JUNCTION, departAt: 935 },
      { station: stations.NEW_BRUNSWICK, departAt: 949 },
      { station: stations.NEWARK_PENN, departAt: 1014 },
      { station: stations.NEW_YORK, departAt: 1033 }
    ]
  },
  {
    trainNumber: '3232',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 1011 },
      { station: stations.LINDEN, departAt: 1014 },
      { station: stations.ELIZABETH, departAt: 1022 },
      { station: stations.NORTH_ELIZABETH, departAt: 1024 },
      { station: stations.NEWARK_AIRPORT, departAt: 1028 },
      { station: stations.NEWARK_PENN, departAt: 1034 },
      { station: stations.SECAUCUS, departAt: 1041 },
      { station: stations.NEW_YORK, departAt: 1054 }
    ]
  },
  {
    trainNumber: '3834',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 952 },
      { station: stations.HAMILTON, departAt: 958 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1005 },
      { station: stations.NEW_BRUNSWICK, departAt: 1019 },
      { station: stations.EDISON, departAt: 1024 },
      { station: stations.METUCHEN, departAt: 1029 },
      { station: stations.METROPARK, departAt: 1033 },
      { station: stations.RAHWAY, departAt: 1040 },
      { station: stations.NEWARK_AIRPORT, departAt: 1050 },
      { station: stations.NEWARK_PENN, departAt: 1056 },
      { station: stations.SECAUCUS, departAt: 1103 },
      { station: stations.NEW_YORK, departAt: 1116 }
    ]
  },
  {
    trainNumber: '3236',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 1051 },
      { station: stations.LINDEN, departAt: 1054 },
      { station: stations.ELIZABETH, departAt: 1101 },
      { station: stations.NEWARK_AIRPORT, departAt: 1105 },
      { station: stations.NEWARK_PENN, departAt: 1112 },
      { station: stations.SECAUCUS, departAt: 1120 },
      { station: stations.NEW_YORK, departAt: 1134 }
    ]
  },
  {
    trainNumber: '3836',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1016 },
      { station: stations.HAMILTON, departAt: 1022 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1029 },
      { station: stations.NEW_BRUNSWICK, departAt: 1043 },
      { station: stations.EDISON, departAt: 1047 },
      { station: stations.METUCHEN, departAt: 1052 },
      { station: stations.METROPARK, departAt: 1057 },
      { station: stations.RAHWAY, departAt: 1104 },
      { station: stations.LINDEN, departAt: 1108 },
      { station: stations.ELIZABETH, departAt: 1114 },
      { station: stations.NEWARK_AIRPORT, departAt: 1118 },
      { station: stations.NEWARK_PENN, departAt: 1124 },
      { station: stations.SECAUCUS, departAt: 1131 },
      { station: stations.NEW_YORK, departAt: 1144 }
    ]
  },
  {
    trainNumber: '3838',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1041 },
      { station: stations.HAMILTON, departAt: 1047 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1054 },
      { station: stations.NEW_BRUNSWICK, departAt: 1109 },
      { station: stations.EDISON, departAt: 1114 },
      { station: stations.METUCHEN, departAt: 1119 },
      { station: stations.METROPARK, departAt: 1124 },
      { station: stations.RAHWAY, departAt: 1131 },
      { station: stations.LINDEN, departAt: 1136 },
      { station: stations.ELIZABETH, departAt: 1143 },
      { station: stations.NEWARK_AIRPORT, departAt: 1148 },
      { station: stations.NEWARK_PENN, departAt: 1155 },
      { station: stations.SECAUCUS, departAt: 1202 },
      { station: stations.NEW_YORK, departAt: 1217 }
    ]
  },
  {
    trainNumber: '3240',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 1151 },
      { station: stations.LINDEN, departAt: 1154 },
      { station: stations.ELIZABETH, departAt: 1201 },
      { station: stations.NORTH_ELIZABETH, departAt: 1204 },
      { station: stations.NEWARK_AIRPORT, departAt: 1207 },
      { station: stations.NEWARK_PENN, departAt: 1214 },
      { station: stations.SECAUCUS, departAt: 1221 },
      { station: stations.NEW_YORK, departAt: 1235 }
    ]
  },
  {
    trainNumber: '3840',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1128 },
      { station: stations.HAMILTON, departAt: 1134 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1141 },
      { station: stations.NEW_BRUNSWICK, departAt: 1156 },
      { station: stations.EDISON, departAt: 1201 },
      { station: stations.METUCHEN, departAt: 1206 },
      { station: stations.METROPARK, departAt: 1211 },
      { station: stations.RAHWAY, departAt: 1218 },
      { station: stations.LINDEN, departAt: 1222 },
      { station: stations.ELIZABETH, departAt: 1228 },
      { station: stations.NEWARK_AIRPORT, departAt: 1233 },
      { station: stations.NEWARK_PENN, departAt: 1239 },
      { station: stations.SECAUCUS, departAt: 1246 },
      { station: stations.NEW_YORK, departAt: 1300 }
    ]
  },
  {
    trainNumber: '3842',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1153 },
      { station: stations.HAMILTON, departAt: 1159 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1206 },
      { station: stations.NEW_BRUNSWICK, departAt: 1220 },
      { station: stations.EDISON, departAt: 1225 },
      { station: stations.METUCHEN, departAt: 1230 },
      { station: stations.METROPARK, departAt: 1234 },
      { station: stations.RAHWAY, departAt: 1241 },
      { station: stations.LINDEN, departAt: 1245 },
      { station: stations.ELIZABETH, departAt: 1251 },
      { station: stations.NEWARK_AIRPORT, departAt: 1256 },
      { station: stations.NEWARK_PENN, departAt: 1301 },
      { station: stations.SECAUCUS, departAt: 1309 },
      { station: stations.NEW_YORK, departAt: 1322 }
    ]
  },
  {
    trainNumber: '3244',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 1251 },
      { station: stations.LINDEN, departAt: 1254 },
      { station: stations.ELIZABETH, departAt: 1301 },
      { station: stations.NEWARK_AIRPORT, departAt: 1305 },
      { station: stations.NEWARK_PENN, departAt: 1312 },
      { station: stations.SECAUCUS, departAt: 1319 },
      { station: stations.NEW_YORK, departAt: 1333 }
    ]
  },
  {
    trainNumber: '3844',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1221 },
      { station: stations.HAMILTON, departAt: 1227 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1234 },
      { station: stations.NEW_BRUNSWICK, departAt: 1248 },
      { station: stations.EDISON, departAt: 1252 },
      { station: stations.METUCHEN, departAt: 1257 },
      { station: stations.METROPARK, departAt: 1302 },
      { station: stations.RAHWAY, departAt: 1309 },
      { station: stations.LINDEN, departAt: 1313 },
      { station: stations.ELIZABETH, departAt: 1319 },
      { station: stations.NORTH_ELIZABETH, departAt: 1322 },
      { station: stations.NEWARK_AIRPORT, departAt: 1326 },
      { station: stations.NEWARK_PENN, departAt: 1333 },
      { station: stations.SECAUCUS, departAt: 1342 },
      { station: stations.NEW_YORK, departAt: 1355 }
    ]
  },
  {
    trainNumber: '3846',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1252 },
      { station: stations.HAMILTON, departAt: 1258 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1305 },
      { station: stations.NEW_BRUNSWICK, departAt: 1320 },
      { station: stations.EDISON, departAt: 1324 },
      { station: stations.METUCHEN, departAt: 1329 },
      { station: stations.METROPARK, departAt: 1334 },
      { station: stations.RAHWAY, departAt: 1340 },
      { station: stations.LINDEN, departAt: 1344 },
      { station: stations.ELIZABETH, departAt: 1351 },
      { station: stations.NEWARK_AIRPORT, departAt: 1355 },
      { station: stations.NEWARK_PENN, departAt: 1401 },
      { station: stations.SECAUCUS, departAt: 1409 },
      { station: stations.NEW_YORK, departAt: 1424 }
    ]
  },
  {
    trainNumber: '3248',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 1351 },
      { station: stations.LINDEN, departAt: 1354 },
      { station: stations.ELIZABETH, departAt: 1401 },
      { station: stations.NEWARK_AIRPORT, departAt: 1405 },
      { station: stations.NEWARK_PENN, departAt: 1413 },
      { station: stations.SECAUCUS, departAt: 1420 },
      { station: stations.NEW_YORK, departAt: 1433 }
    ]
  },
  {
    trainNumber: '3848',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1309 },
      { station: stations.HAMILTON, departAt: 1315 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1322 },
      { station: stations.NEW_BRUNSWICK, departAt: 1336 },
      { station: stations.EDISON, departAt: 1340 },
      { station: stations.METUCHEN, departAt: 1345 },
      { station: stations.METROPARK, departAt: 1350 },
      { station: stations.RAHWAY, departAt: 1357 },
      { station: stations.LINDEN, departAt: 1401 },
      { station: stations.ELIZABETH, departAt: 1407 },
      { station: stations.NORTH_ELIZABETH, departAt: 1410 },
      { station: stations.NEWARK_AIRPORT, departAt: 1413 },
      { station: stations.NEWARK_PENN, departAt: 1420 },
      { station: stations.SECAUCUS, departAt: 1427 },
      { station: stations.NEW_YORK, departAt: 1441 }
    ]
  },
  {
    trainNumber: '3850',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1344 },
      { station: stations.HAMILTON, departAt: 1350 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1357 },
      { station: stations.NEW_BRUNSWICK, departAt: 1411 },
      { station: stations.EDISON, departAt: 1416 },
      { station: stations.METUCHEN, departAt: 1421 },
      { station: stations.METROPARK, departAt: 1425 },
      { station: stations.RAHWAY, departAt: 1432 },
      { station: stations.LINDEN, departAt: 1436 },
      { station: stations.ELIZABETH, departAt: 1442 },
      { station: stations.NEWARK_AIRPORT, departAt: 1447 },
      { station: stations.NEWARK_PENN, departAt: 1454 },
      { station: stations.SECAUCUS, departAt: 1502 },
      { station: stations.NEW_YORK, departAt: 1515 }
    ]
  },
  {
    trainNumber: '3252',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 1451 },
      { station: stations.LINDEN, departAt: 1454 },
      { station: stations.ELIZABETH, departAt: 1501 },
      { station: stations.NEWARK_AIRPORT, departAt: 1505 },
      { station: stations.NEWARK_PENN, departAt: 1513 },
      { station: stations.SECAUCUS, departAt: 1520 },
      { station: stations.NEW_YORK, departAt: 1534 }
    ]
  },
  {
    trainNumber: '3852',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1409 },
      { station: stations.HAMILTON, departAt: 1415 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1422 },
      { station: stations.NEW_BRUNSWICK, departAt: 1436 },
      { station: stations.EDISON, departAt: 1441 },
      { station: stations.METUCHEN, departAt: 1446 },
      { station: stations.METROPARK, departAt: 1451 },
      { station: stations.RAHWAY, departAt: 1457 },
      { station: stations.LINDEN, departAt: 1501 },
      { station: stations.ELIZABETH, departAt: 1507 },
      { station: stations.NEWARK_AIRPORT, departAt: 1511 },
      { station: stations.NEWARK_PENN, departAt: 1518 },
      { station: stations.NEW_YORK, departAt: 1536 }
    ]
  },
  {
    trainNumber: '3154',
    isWeekend: false,
    routes: [
      { station: stations.NEW_BRUNSWICK, departAt: 1503 },
      { station: stations.EDISON, departAt: 1508 },
      { station: stations.METUCHEN, departAt: 1513 },
      { station: stations.METROPARK, departAt: 1517 },
      { station: stations.RAHWAY, departAt: 1524 },
      { station: stations.LINDEN, departAt: 1528 },
      { station: stations.ELIZABETH, departAt: 1534 },
      { station: stations.NORTH_ELIZABETH, departAt: 1537 },
      { station: stations.NEWARK_AIRPORT, departAt: 1541 },
      { station: stations.NEWARK_PENN, departAt: 1546 },
      { station: stations.SECAUCUS, departAt: 1554 },
      { station: stations.NEW_YORK, departAt: 1607 }
    ]
  },
  {
    trainNumber: '3954',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1459 },
      { station: stations.HAMILTON, departAt: 1505 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1512 },
      { station: stations.NEW_BRUNSWICK, departAt: 1526 },
      { station: stations.NEWARK_AIRPORT, departAt: 1548 },
      { station: stations.NEWARK_PENN, departAt: 1554 },
      { station: stations.SECAUCUS, departAt: 1601 },
      { station: stations.NEW_YORK, departAt: 1615 }
    ]
  },
  {
    trainNumber: '3256',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 1545 },
      { station: stations.LINDEN, departAt: 1548 },
      { station: stations.ELIZABETH, departAt: 1554 },
      { station: stations.NORTH_ELIZABETH, departAt: 1557 },
      { station: stations.NEWARK_AIRPORT, departAt: 1601 },
      { station: stations.NEWARK_PENN, departAt: 1606 },
      { station: stations.SECAUCUS, departAt: 1614 },
      { station: stations.NEW_YORK, departAt: 1627 }
    ]
  },
  {
    trainNumber: '3856',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1514 },
      { station: stations.HAMILTON, departAt: 1520 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1527 },
      { station: stations.NEW_BRUNSWICK, departAt: 1543 },
      { station: stations.EDISON, departAt: 1548 },
      { station: stations.METUCHEN, departAt: 1554 },
      { station: stations.METROPARK, departAt: 1559 },
      { station: stations.RAHWAY, departAt: 1604 },
      { station: stations.LINDEN, departAt: 1608 },
      { station: stations.ELIZABETH, departAt: 1614 },
      { station: stations.NORTH_ELIZABETH, departAt: 1617 },
      { station: stations.NEWARK_AIRPORT, departAt: 1621 },
      { station: stations.NEWARK_PENN, departAt: 1627 },
      { station: stations.SECAUCUS, departAt: 1634 },
      { station: stations.NEW_YORK, departAt: 1649 }
    ]
  },
  {
    trainNumber: '3858',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1536 },
      { station: stations.HAMILTON, departAt: 1542 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1549 },
      { station: stations.NEW_BRUNSWICK, departAt: 1605 },
      { station: stations.EDISON, departAt: 1610 },
      { station: stations.METUCHEN, departAt: 1615 },
      { station: stations.METROPARK, departAt: 1619 },
      { station: stations.NEWARK_AIRPORT, departAt: 1633 },
      { station: stations.NEWARK_PENN, departAt: 1639 },
      { station: stations.NEW_YORK, departAt: 1657 }
    ]
  },
  {
    trainNumber: '3260',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 1643 },
      { station: stations.LINDEN, departAt: 1647 },
      { station: stations.ELIZABETH, departAt: 1653 },
      { station: stations.NORTH_ELIZABETH, departAt: 1656 },
      { station: stations.NEWARK_AIRPORT, departAt: 1659 },
      { station: stations.NEWARK_PENN, departAt: 1706 },
      { station: stations.SECAUCUS, departAt: 1716 },
      { station: stations.NEW_YORK, departAt: 1728 }
    ]
  },
  {
    trainNumber: '3860',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1603 },
      { station: stations.HAMILTON, departAt: 1609 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1616 },
      { station: stations.NEW_BRUNSWICK, departAt: 1631 },
      { station: stations.EDISON, departAt: 1635 },
      { station: stations.METUCHEN, departAt: 1640 },
      { station: stations.METROPARK, departAt: 1645 },
      { station: stations.RAHWAY, departAt: 1652 },
      { station: stations.LINDEN, departAt: 1656 },
      { station: stations.ELIZABETH, departAt: 1702 },
      { station: stations.NEWARK_AIRPORT, departAt: 1707 },
      { station: stations.NEWARK_PENN, departAt: 1714 },
      { station: stations.SECAUCUS, departAt: 1722 },
      { station: stations.NEW_YORK, departAt: 1735 }
    ]
  },
  {
    trainNumber: '3896',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1612 },
      { station: stations.HAMILTON, departAt: 1618 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1625 },
      { station: stations.NEW_BRUNSWICK, departAt: 1640 },
      { station: stations.EDISON, departAt: 1644 },
      { station: stations.METUCHEN, departAt: 1649 },
      { station: stations.METROPARK, departAt: 1654 },
      { station: stations.NEWARK_AIRPORT, departAt: 1710 },
      { station: stations.NEWARK_PENN, departAt: 1717 },
      { station: stations.SECAUCUS, departAt: 1724 },
      { station: stations.NEW_YORK, departAt: 1738 }
    ]
  },
  {
    trainNumber: '3510',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 1703 },
      { station: stations.LINDEN, departAt: 1707 },
      { station: stations.ELIZABETH, departAt: 1713 },
      { station: stations.NEWARK_PENN, departAt: 1723 },
      { station: stations.SECAUCUS, departAt: 1730 },
      { station: stations.NEW_YORK, departAt: 1743 }
    ]
  },
  {
    trainNumber: '3862',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1636 },
      { station: stations.HAMILTON, departAt: 1642 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1649 },
      { station: stations.NEW_BRUNSWICK, departAt: 1703 },
      { station: stations.EDISON, departAt: 1707 },
      { station: stations.METUCHEN, departAt: 1712 },
      { station: stations.METROPARK, departAt: 1717 },
      { station: stations.RAHWAY, departAt: 1723 },
      { station: stations.LINDEN, departAt: 1727 },
      { station: stations.ELIZABETH, departAt: 1734 },
      { station: stations.NORTH_ELIZABETH, departAt: 1737 },
      { station: stations.NEWARK_AIRPORT, departAt: 1740 },
      { station: stations.NEWARK_PENN, departAt: 1746 },
      { station: stations.SECAUCUS, departAt: 1753 },
      { station: stations.NEW_YORK, departAt: 1807 }
    ]
  },
  {
    trainNumber: '3864',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1644 },
      { station: stations.NEW_BRUNSWICK, departAt: 1714 },
      { station: stations.EDISON, departAt: 1719 },
      { station: stations.METUCHEN, departAt: 1724 },
      { station: stations.METROPARK, departAt: 1729 },
      { station: stations.ELIZABETH, departAt: 1741 },
      { station: stations.NEWARK_AIRPORT, departAt: 1745 },
      { station: stations.NEWARK_PENN, departAt: 1752 },
      { station: stations.SECAUCUS, departAt: 1759 },
      { station: stations.NEW_YORK, departAt: 1813 }
    ]
  },
  {
    trainNumber: '3738',
    isWeekend: false,
    routes: [
      { station: stations.METROPARK, departAt: 1737 },
      { station: stations.NEWARK_AIRPORT, departAt: 1751 },
      { station: stations.NEWARK_PENN, departAt: 1757 },
      { station: stations.SECAUCUS, departAt: 1805 },
      { station: stations.NEW_YORK, departAt: 1817 }
    ]
  },
  {
    trainNumber: '3266',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 1743 },
      { station: stations.LINDEN, departAt: 1747 },
      { station: stations.ELIZABETH, departAt: 1753 },
      { station: stations.NEWARK_AIRPORT, departAt: 1758 },
      { station: stations.NEWARK_PENN, departAt: 1804 },
      { station: stations.SECAUCUS, departAt: 1811 },
      { station: stations.NEW_YORK, departAt: 1825 }
    ]
  },
  {
    trainNumber: '3866',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1704 },
      { station: stations.HAMILTON, departAt: 1710 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1717 },
      { station: stations.NEW_BRUNSWICK, departAt: 1731 },
      { station: stations.EDISON, departAt: 1735 },
      { station: stations.METUCHEN, departAt: 1740 },
      { station: stations.METROPARK, departAt: 1745 },
      { station: stations.RAHWAY, departAt: 1752 },
      { station: stations.LINDEN, departAt: 1756 },
      { station: stations.ELIZABETH, departAt: 1802 },
      { station: stations.NORTH_ELIZABETH, departAt: 1805 },
      { station: stations.NEWARK_AIRPORT, departAt: 1808 },
      { station: stations.NEWARK_PENN, departAt: 1815 },
      { station: stations.SECAUCUS, departAt: 1822 },
      { station: stations.NEW_YORK, departAt: 1835 }
    ]
  },
  {
    trainNumber: '3898',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1731 },
      { station: stations.HAMILTON, departAt: 1737 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1744 },
      { station: stations.NEWARK_AIRPORT, departAt: 1817 },
      { station: stations.NEWARK_PENN, departAt: 1825 },
      { station: stations.NEW_YORK, departAt: 1843 }
    ]
  },
  {
    trainNumber: '3598',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 1819 },
      { station: stations.LINDEN, departAt: 1823 },
      { station: stations.ELIZABETH, departAt: 1829 },
      { station: stations.NORTH_ELIZABETH, departAt: 1832 },
      { station: stations.NEWARK_AIRPORT, departAt: 1835 },
      { station: stations.NEWARK_PENN, departAt: 1842 },
      { station: stations.SECAUCUS, departAt: 1850 },
      { station: stations.NEW_YORK, departAt: 1903 }
    ]
  },
  {
    trainNumber: '3512',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 1844 },
      { station: stations.LINDEN, departAt: 1848 },
      { station: stations.ELIZABETH, departAt: 1854 },
      { station: stations.NORTH_ELIZABETH, departAt: 1857 },
      { station: stations.NEWARK_AIRPORT, departAt: 1900 },
      { station: stations.NEWARK_PENN, departAt: 1907 },
      { station: stations.SECAUCUS, departAt: 1914 },
      { station: stations.NEW_YORK, departAt: 1927 }
    ]
  },
  {
    trainNumber: '3868',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1802 },
      { station: stations.HAMILTON, departAt: 1808 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1815 },
      { station: stations.NEW_BRUNSWICK, departAt: 1829 },
      { station: stations.EDISON, departAt: 1833 },
      { station: stations.METUCHEN, departAt: 1838 },
      { station: stations.METROPARK, departAt: 1843 },
      { station: stations.RAHWAY, departAt: 1850 },
      { station: stations.LINDEN, departAt: 1854 },
      { station: stations.ELIZABETH, departAt: 1900 },
      { station: stations.NEWARK_AIRPORT, departAt: 1904 },
      { station: stations.NEWARK_PENN, departAt: 1911 },
      { station: stations.NEW_YORK, departAt: 1929 }
    ]
  },
  {
    trainNumber: '3870',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1828 },
      { station: stations.HAMILTON, departAt: 1834 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1841 },
      { station: stations.NEW_BRUNSWICK, departAt: 1855 },
      { station: stations.NEWARK_AIRPORT, departAt: 1917 },
      { station: stations.NEWARK_PENN, departAt: 1922 },
      { station: stations.SECAUCUS, departAt: 1930 },
      { station: stations.NEW_YORK, departAt: 1943 }
    ]
  },
  {
    trainNumber: '3514',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 1922 },
      { station: stations.LINDEN, departAt: 1926 },
      { station: stations.ELIZABETH, departAt: 1932 },
      { station: stations.NEWARK_AIRPORT, departAt: 1937 },
      { station: stations.NEWARK_PENN, departAt: 1943 },
      { station: stations.SECAUCUS, departAt: 1951 },
      { station: stations.NEW_YORK, departAt: 2004 }
    ]
  },
  {
    trainNumber: '3872',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1838 },
      { station: stations.HAMILTON, departAt: 1844 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1851 },
      { station: stations.NEW_BRUNSWICK, departAt: 1907 },
      { station: stations.EDISON, departAt: 1911 },
      { station: stations.METUCHEN, departAt: 1916 },
      { station: stations.METROPARK, departAt: 1921 },
      { station: stations.RAHWAY, departAt: 1927 },
      { station: stations.LINDEN, departAt: 1931 },
      { station: stations.ELIZABETH, departAt: 1938 },
      { station: stations.NEWARK_AIRPORT, departAt: 1942 },
      { station: stations.NEWARK_PENN, departAt: 1949 },
      { station: stations.SECAUCUS, departAt: 1956 },
      { station: stations.NEW_YORK, departAt: 2009 }
    ]
  },
  {
    trainNumber: '3874',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1904 },
      { station: stations.HAMILTON, departAt: 1910 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1917 },
      { station: stations.NEW_BRUNSWICK, departAt: 1936 },
      { station: stations.EDISON, departAt: 1941 },
      { station: stations.METUCHEN, departAt: 1946 },
      { station: stations.METROPARK, departAt: 1951 },
      { station: stations.RAHWAY, departAt: 1958 },
      { station: stations.LINDEN, departAt: 2002 },
      { station: stations.ELIZABETH, departAt: 2010 },
      { station: stations.NORTH_ELIZABETH, departAt: 2013 },
      { station: stations.NEWARK_AIRPORT, departAt: 2018 },
      { station: stations.NEWARK_PENN, departAt: 2025 },
      { station: stations.SECAUCUS, departAt: 2032 },
      { station: stations.NEW_YORK, departAt: 2045 }
    ]
  },
  {
    trainNumber: '3516',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 2024 },
      { station: stations.LINDEN, departAt: 2028 },
      { station: stations.ELIZABETH, departAt: 2034 },
      { station: stations.NEWARK_AIRPORT, departAt: 2039 },
      { station: stations.NEWARK_PENN, departAt: 2046 },
      { station: stations.SECAUCUS, departAt: 2054 },
      { station: stations.NEW_YORK, departAt: 2108 }
    ]
  },
  {
    trainNumber: '3876',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 1956 },
      { station: stations.HAMILTON, departAt: 2002 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2009 },
      { station: stations.NEW_BRUNSWICK, departAt: 2024 },
      { station: stations.EDISON, departAt: 2029 },
      { station: stations.METUCHEN, departAt: 2034 },
      { station: stations.METROPARK, departAt: 2038 },
      { station: stations.RAHWAY, departAt: 2045 },
      { station: stations.LINDEN, departAt: 2049 },
      { station: stations.ELIZABETH, departAt: 2055 },
      { station: stations.NEWARK_AIRPORT, departAt: 2100 },
      { station: stations.NEWARK_PENN, departAt: 2107 },
      { station: stations.SECAUCUS, departAt: 2114 },
      { station: stations.NEW_YORK, departAt: 2128 }
    ]
  },
  {
    trainNumber: '3278',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 2106 },
      { station: stations.LINDEN, departAt: 2110 },
      { station: stations.ELIZABETH, departAt: 2117 },
      { station: stations.NEWARK_AIRPORT, departAt: 2121 },
      { station: stations.NEWARK_PENN, departAt: 2127 },
      { station: stations.SECAUCUS, departAt: 2134 },
      { station: stations.NEW_YORK, departAt: 2148 }
    ]
  },
  {
    trainNumber: '3880',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 2039 },
      { station: stations.HAMILTON, departAt: 2045 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2052 },
      { station: stations.NEW_BRUNSWICK, departAt: 2107 },
      { station: stations.EDISON, departAt: 2111 },
      { station: stations.METUCHEN, departAt: 2117 },
      { station: stations.METROPARK, departAt: 2122 },
      { station: stations.RAHWAY, departAt: 2129 },
      { station: stations.LINDEN, departAt: 2133 },
      { station: stations.ELIZABETH, departAt: 2139 },
      { station: stations.NEWARK_AIRPORT, departAt: 2143 },
      { station: stations.NEWARK_PENN, departAt: 2150 },
      { station: stations.SECAUCUS, departAt: 2158 },
      { station: stations.NEW_YORK, departAt: 2212 }
    ]
  },
  {
    trainNumber: '3984',
    isWeekend: false,
    routes: [
      { station: stations.NEWARK_PENN, departAt: 2208 },
      { station: stations.SECAUCUS, departAt: 2215 },
      { station: stations.NEW_YORK, departAt: 2229 }
    ]
  },
  {
    trainNumber: '3882',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 2109 },
      { station: stations.HAMILTON, departAt: 2115 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2122 },
      { station: stations.NEW_BRUNSWICK, departAt: 2136 },
      { station: stations.EDISON, departAt: 2140 },
      { station: stations.METUCHEN, departAt: 2145 },
      { station: stations.METROPARK, departAt: 2150 },
      { station: stations.RAHWAY, departAt: 2157 },
      { station: stations.LINDEN, departAt: 2200 },
      { station: stations.ELIZABETH, departAt: 2207 },
      { station: stations.NORTH_ELIZABETH, departAt: 2210 },
      { station: stations.NEWARK_AIRPORT, departAt: 2213 },
      { station: stations.NEWARK_PENN, departAt: 2220 },
      { station: stations.SECAUCUS, departAt: 2227 },
      { station: stations.NEW_YORK, departAt: 2241 }
    ]
  },
  {
    trainNumber: '3284',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 2206 },
      { station: stations.LINDEN, departAt: 2210 },
      { station: stations.ELIZABETH, departAt: 2216 },
      { station: stations.NEWARK_AIRPORT, departAt: 2221 },
      { station: stations.NEWARK_PENN, departAt: 2227 },
      { station: stations.SECAUCUS, departAt: 2234 },
      { station: stations.NEW_YORK, departAt: 2249 }
    ]
  },
  {
    trainNumber: '3886',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 2206 },
      { station: stations.HAMILTON, departAt: 2212 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2219 },
      { station: stations.NEW_BRUNSWICK, departAt: 2233 },
      { station: stations.EDISON, departAt: 2237 },
      { station: stations.METUCHEN, departAt: 2242 },
      { station: stations.METROPARK, departAt: 2247 },
      { station: stations.RAHWAY, departAt: 2254 },
      { station: stations.LINDEN, departAt: 2257 },
      { station: stations.ELIZABETH, departAt: 2303 },
      { station: stations.NEWARK_AIRPORT, departAt: 2308 },
      { station: stations.NEWARK_PENN, departAt: 2314 },
      { station: stations.SECAUCUS, departAt: 2321 },
      { station: stations.NEW_YORK, departAt: 2337 }
    ]
  },
  {
    trainNumber: '3288',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 2319 },
      { station: stations.LINDEN, departAt: 2323 },
      { station: stations.ELIZABETH, departAt: 2329 },
      { station: stations.NEWARK_AIRPORT, departAt: 2333 },
      { station: stations.NEWARK_PENN, departAt: 2340 },
      { station: stations.SECAUCUS, departAt: 2347 },
      { station: stations.NEW_YORK, departAt: 2401 }
    ]
  },
  {
    trainNumber: '3742',
    isWeekend: false,
    routes: [
      { station: stations.NEWARK_AIRPORT, departAt: 2402 },
      { station: stations.NEWARK_PENN, departAt: 2409 },
      { station: stations.SECAUCUS, departAt: 2417 },
      { station: stations.NEW_YORK, departAt: 2432 }
    ]
  },
  {
    trainNumber: '3888',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 2318 },
      { station: stations.HAMILTON, departAt: 2324 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2331 },
      { station: stations.NEW_BRUNSWICK, departAt: 2346 },
      { station: stations.EDISON, departAt: 2350 },
      { station: stations.METUCHEN, departAt: 2355 },
      { station: stations.METROPARK, departAt: 2400 },
      { station: stations.RAHWAY, departAt: 2407 },
      { station: stations.LINDEN, departAt: 2411 },
      { station: stations.ELIZABETH, departAt: 2417 },
      { station: stations.NORTH_ELIZABETH, departAt: 2420 },
      { station: stations.NEWARK_AIRPORT, departAt: 2423 },
      { station: stations.NEWARK_PENN, departAt: 2430 },
      { station: stations.SECAUCUS, departAt: 2437 },
      { station: stations.NEW_YORK, departAt: 2455 }
    ]
  },
  {
    trainNumber: '3292',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 2428 },
      { station: stations.LINDEN, departAt: 2432 },
      { station: stations.ELIZABETH, departAt: 2438 },
      { station: stations.NEWARK_AIRPORT, departAt: 2443 },
      { station: stations.NEWARK_PENN, departAt: 2450 },
      { station: stations.SECAUCUS, departAt: 2458 },
      { station: stations.NEW_YORK, departAt: 2518 }
    ]
  },
  {
    trainNumber: '3892',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 2351 },
      { station: stations.HAMILTON, departAt: 2357 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2404 },
      { station: stations.NEW_BRUNSWICK, departAt: 2418 },
      { station: stations.EDISON, departAt: 2422 },
      { station: stations.METUCHEN, departAt: 2427 },
      { station: stations.METROPARK, departAt: 2432 },
      { station: stations.RAHWAY, departAt: 2439 },
      { station: stations.LINDEN, departAt: 2442 },
      { station: stations.ELIZABETH, departAt: 2448 },
      { station: stations.NEWARK_AIRPORT, departAt: 2453 },
      { station: stations.NEWARK_PENN, departAt: 2459 },
      { station: stations.SECAUCUS, departAt: 2506 },
      { station: stations.NEW_YORK, departAt: 2522 }
    ]
  },
  {
    trainNumber: '3200',
    isWeekend: false,
    routes: [
      { station: stations.RAHWAY, departAt: 2515 },
      { station: stations.LINDEN, departAt: 2519 },
      { station: stations.ELIZABETH, departAt: 2525 },
      { station: stations.NORTH_ELIZABETH, departAt: 2528 },
      { station: stations.NEWARK_AIRPORT, departAt: 2531 },
      { station: stations.NEWARK_PENN, departAt: 2536 },
      { station: stations.SECAUCUS, departAt: 2544 },
      { station: stations.NEW_YORK, departAt: 2603 }
    ]
  },
  {
    trainNumber: '3800',
    isWeekend: false,
    routes: [
      { station: stations.TRENTON, departAt: 2500 },
      { station: stations.HAMILTON, departAt: 2506 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2514 },
      { station: stations.NEW_BRUNSWICK, departAt: 2530 },
      { station: stations.EDISON, departAt: 2535 },
      { station: stations.METUCHEN, departAt: 2540 },
      { station: stations.METROPARK, departAt: 2545 },
      { station: stations.RAHWAY, departAt: 2552 },
      { station: stations.LINDEN, departAt: 2556 },
      { station: stations.ELIZABETH, departAt: 2602 },
      { station: stations.NEWARK_AIRPORT, departAt: 2607 },
      { station: stations.NEWARK_PENN, departAt: 2613 },
      { station: stations.SECAUCUS, departAt: 2621 },
      { station: stations.NEW_YORK, departAt: 2646 }
    ]
  },
  {
    trainNumber: '7804',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 457 },
      { station: stations.HAMILTON, departAt: 503 },
      { station: stations.PRINCETON_JUNCTION, departAt: 510 },
      { station: stations.NEW_BRUNSWICK, departAt: 527 },
      { station: stations.EDISON, departAt: 532 },
      { station: stations.METUCHEN, departAt: 537 },
      { station: stations.METROPARK, departAt: 542 },
      { station: stations.RAHWAY, departAt: 549 },
      { station: stations.LINDEN, departAt: 553 },
      { station: stations.ELIZABETH, departAt: 559 },
      { station: stations.NEWARK_AIRPORT, departAt: 604 },
      { station: stations.NEWARK_PENN, departAt: 610 },
      { station: stations.SECAUCUS, departAt: 621 },
      { station: stations.NEW_YORK, departAt: 635 }
    ]
  },
  {
    trainNumber: '7204',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 554 },
      { station: stations.LINDEN, departAt: 558 },
      { station: stations.ELIZABETH, departAt: 604 },
      { station: stations.NORTH_ELIZABETH, departAt: 607 },
      { station: stations.NEWARK_AIRPORT, departAt: 610 },
      { station: stations.NEWARK_PENN, departAt: 615 },
      { station: stations.SECAUCUS, departAt: 623 },
      { station: stations.NEW_YORK, departAt: 637 }
    ]
  },
  {
    trainNumber: '7808',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 557 },
      { station: stations.HAMILTON, departAt: 603 },
      { station: stations.PRINCETON_JUNCTION, departAt: 610 },
      { station: stations.NEW_BRUNSWICK, departAt: 627 },
      { station: stations.EDISON, departAt: 632 },
      { station: stations.METUCHEN, departAt: 637 },
      { station: stations.METROPARK, departAt: 642 },
      { station: stations.RAHWAY, departAt: 649 },
      { station: stations.LINDEN, departAt: 653 },
      { station: stations.ELIZABETH, departAt: 659 },
      { station: stations.NEWARK_AIRPORT, departAt: 704 },
      { station: stations.NEWARK_PENN, departAt: 710 },
      { station: stations.SECAUCUS, departAt: 718 },
      { station: stations.NEW_YORK, departAt: 735 }
    ]
  },
  {
    trainNumber: '7208',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 700 },
      { station: stations.LINDEN, departAt: 704 },
      { station: stations.ELIZABETH, departAt: 710 },
      { station: stations.NEWARK_AIRPORT, departAt: 715 },
      { station: stations.NEWARK_PENN, departAt: 722 },
      { station: stations.SECAUCUS, departAt: 729 },
      { station: stations.NEW_YORK, departAt: 742 }
    ]
  },
  {
    trainNumber: '7812',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 657 },
      { station: stations.HAMILTON, departAt: 703 },
      { station: stations.PRINCETON_JUNCTION, departAt: 710 },
      { station: stations.NEW_BRUNSWICK, departAt: 727 },
      { station: stations.EDISON, departAt: 732 },
      { station: stations.METUCHEN, departAt: 737 },
      { station: stations.METROPARK, departAt: 742 },
      { station: stations.RAHWAY, departAt: 749 },
      { station: stations.LINDEN, departAt: 753 },
      { station: stations.ELIZABETH, departAt: 759 },
      { station: stations.NEWARK_AIRPORT, departAt: 804 },
      { station: stations.NEWARK_PENN, departAt: 810 },
      { station: stations.SECAUCUS, departAt: 818 },
      { station: stations.NEW_YORK, departAt: 832 }
    ]
  },
  {
    trainNumber: '7212',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 800 },
      { station: stations.LINDEN, departAt: 804 },
      { station: stations.ELIZABETH, departAt: 810 },
      { station: stations.NORTH_ELIZABETH, departAt: 813 },
      { station: stations.NEWARK_AIRPORT, departAt: 816 },
      { station: stations.NEWARK_PENN, departAt: 822 },
      { station: stations.SECAUCUS, departAt: 829 },
      { station: stations.NEW_YORK, departAt: 842 }
    ]
  },
  {
    trainNumber: '7814',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 718 },
      { station: stations.HAMILTON, departAt: 724 },
      { station: stations.PRINCETON_JUNCTION, departAt: 731 },
      { station: stations.NEW_BRUNSWICK, departAt: 748 },
      { station: stations.EDISON, departAt: 753 },
      { station: stations.METUCHEN, departAt: 758 },
      { station: stations.METROPARK, departAt: 803 },
      { station: stations.NEWARK_AIRPORT, departAt: 824 },
      { station: stations.NEWARK_PENN, departAt: 830 },
      { station: stations.NEW_YORK, departAt: 848 }
    ]
  },
  {
    trainNumber: '7816',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 757 },
      { station: stations.HAMILTON, departAt: 803 },
      { station: stations.PRINCETON_JUNCTION, departAt: 810 },
      { station: stations.NEW_BRUNSWICK, departAt: 827 },
      { station: stations.EDISON, departAt: 832 },
      { station: stations.METUCHEN, departAt: 837 },
      { station: stations.METROPARK, departAt: 842 },
      { station: stations.RAHWAY, departAt: 849 },
      { station: stations.LINDEN, departAt: 853 },
      { station: stations.ELIZABETH, departAt: 859 },
      { station: stations.NEWARK_AIRPORT, departAt: 904 },
      { station: stations.NEWARK_PENN, departAt: 910 },
      { station: stations.SECAUCUS, departAt: 918 },
      { station: stations.NEW_YORK, departAt: 933 }
    ]
  },
  {
    trainNumber: '7216',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 900 },
      { station: stations.LINDEN, departAt: 904 },
      { station: stations.ELIZABETH, departAt: 910 },
      { station: stations.NORTH_ELIZABETH, departAt: 913 },
      { station: stations.NEWARK_AIRPORT, departAt: 917 },
      { station: stations.NEWARK_PENN, departAt: 923 },
      { station: stations.SECAUCUS, departAt: 930 },
      { station: stations.NEW_YORK, departAt: 943 }
    ]
  },
  {
    trainNumber: '7818',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 818 },
      { station: stations.HAMILTON, departAt: 824 },
      { station: stations.PRINCETON_JUNCTION, departAt: 831 },
      { station: stations.NEW_BRUNSWICK, departAt: 848 },
      { station: stations.EDISON, departAt: 853 },
      { station: stations.METUCHEN, departAt: 858 },
      { station: stations.METROPARK, departAt: 903 },
      { station: stations.NEWARK_AIRPORT, departAt: 921 },
      { station: stations.NEWARK_PENN, departAt: 929 },
      { station: stations.SECAUCUS, departAt: 936 },
      { station: stations.NEW_YORK, departAt: 948 }
    ]
  },
  {
    trainNumber: '7620',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 943 },
      { station: stations.LINDEN, departAt: 947 },
      { station: stations.ELIZABETH, departAt: 953 },
      { station: stations.NORTH_ELIZABETH, departAt: 956 },
      { station: stations.NEWARK_AIRPORT, departAt: 1000 },
      { station: stations.NEWARK_PENN, departAt: 1008 },
      { station: stations.SECAUCUS, departAt: 1016 },
      { station: stations.NEW_YORK, departAt: 1035 }
    ]
  },
  {
    trainNumber: '7820',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 859 },
      { station: stations.HAMILTON, departAt: 905 },
      { station: stations.PRINCETON_JUNCTION, departAt: 912 },
      { station: stations.NEW_BRUNSWICK, departAt: 929 },
      { station: stations.EDISON, departAt: 934 },
      { station: stations.METUCHEN, departAt: 939 },
      { station: stations.METROPARK, departAt: 944 },
      { station: stations.RAHWAY, departAt: 951 },
      { station: stations.LINDEN, departAt: 955 },
      { station: stations.ELIZABETH, departAt: 1001 },
      { station: stations.NEWARK_AIRPORT, departAt: 1006 },
      { station: stations.NEWARK_PENN, departAt: 1012 },
      { station: stations.SECAUCUS, departAt: 1021 },
      { station: stations.NEW_YORK, departAt: 1037 }
    ]
  },
  {
    trainNumber: '7220',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 1000 },
      { station: stations.LINDEN, departAt: 1004 },
      { station: stations.ELIZABETH, departAt: 1010 },
      { station: stations.NEWARK_AIRPORT, departAt: 1015 },
      { station: stations.NEWARK_PENN, departAt: 1022 },
      { station: stations.SECAUCUS, departAt: 1029 },
      { station: stations.NEW_YORK, departAt: 1041 }
    ]
  },
  {
    trainNumber: '7822',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 918 },
      { station: stations.HAMILTON, departAt: 924 },
      { station: stations.PRINCETON_JUNCTION, departAt: 931 },
      { station: stations.NEW_BRUNSWICK, departAt: 948 },
      { station: stations.EDISON, departAt: 953 },
      { station: stations.METUCHEN, departAt: 958 },
      { station: stations.METROPARK, departAt: 1003 },
      { station: stations.NEWARK_AIRPORT, departAt: 1018 },
      { station: stations.NEWARK_PENN, departAt: 1024 },
      { station: stations.SECAUCUS, departAt: 1031 },
      { station: stations.NEW_YORK, departAt: 1043 }
    ]
  },
  {
    trainNumber: '7624',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 1042 },
      { station: stations.LINDEN, departAt: 1046 },
      { station: stations.ELIZABETH, departAt: 1052 },
      { station: stations.NORTH_ELIZABETH, departAt: 1055 },
      { station: stations.NEWARK_AIRPORT, departAt: 1059 },
      { station: stations.NEWARK_PENN, departAt: 1107 },
      { station: stations.SECAUCUS, departAt: 1115 },
      { station: stations.NEW_YORK, departAt: 1131 }
    ]
  },
  {
    trainNumber: '7824',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 959 },
      { station: stations.HAMILTON, departAt: 1005 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1012 },
      { station: stations.NEW_BRUNSWICK, departAt: 1029 },
      { station: stations.EDISON, departAt: 1034 },
      { station: stations.METUCHEN, departAt: 1039 },
      { station: stations.METROPARK, departAt: 1044 },
      { station: stations.RAHWAY, departAt: 1051 },
      { station: stations.LINDEN, departAt: 1055 },
      { station: stations.ELIZABETH, departAt: 1101 },
      { station: stations.NEWARK_AIRPORT, departAt: 1106 },
      { station: stations.NEWARK_PENN, departAt: 1112 },
      { station: stations.SECAUCUS, departAt: 1120 },
      { station: stations.NEW_YORK, departAt: 1134 }
    ]
  },
  {
    trainNumber: '7224',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 1100 },
      { station: stations.LINDEN, departAt: 1104 },
      { station: stations.ELIZABETH, departAt: 1110 },
      { station: stations.NEWARK_AIRPORT, departAt: 1115 },
      { station: stations.NEWARK_PENN, departAt: 1122 },
      { station: stations.SECAUCUS, departAt: 1129 },
      { station: stations.NEW_YORK, departAt: 1142 }
    ]
  },
  {
    trainNumber: '7826',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1024 },
      { station: stations.HAMILTON, departAt: 1030 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1037 },
      { station: stations.NEW_BRUNSWICK, departAt: 1054 },
      { station: stations.EDISON, departAt: 1059 },
      { station: stations.METUCHEN, departAt: 1104 },
      { station: stations.METROPARK, departAt: 1109 },
      { station: stations.NEWARK_AIRPORT, departAt: 1124 },
      { station: stations.NEWARK_PENN, departAt: 1130 },
      { station: stations.SECAUCUS, departAt: 1137 },
      { station: stations.NEW_YORK, departAt: 1150 }
    ]
  },
  {
    trainNumber: '7828',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1057 },
      { station: stations.HAMILTON, departAt: 1103 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1110 },
      { station: stations.NEW_BRUNSWICK, departAt: 1127 },
      { station: stations.EDISON, departAt: 1132 },
      { station: stations.METUCHEN, departAt: 1137 },
      { station: stations.METROPARK, departAt: 1142 },
      { station: stations.RAHWAY, departAt: 1149 },
      { station: stations.LINDEN, departAt: 1153 },
      { station: stations.ELIZABETH, departAt: 1159 },
      { station: stations.NORTH_ELIZABETH, departAt: 1202 },
      { station: stations.NEWARK_AIRPORT, departAt: 1206 },
      { station: stations.NEWARK_PENN, departAt: 1212 },
      { station: stations.SECAUCUS, departAt: 1220 },
      { station: stations.NEW_YORK, departAt: 1236 }
    ]
  },
  {
    trainNumber: '7228',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 1200 },
      { station: stations.LINDEN, departAt: 1204 },
      { station: stations.ELIZABETH, departAt: 1210 },
      { station: stations.NEWARK_AIRPORT, departAt: 1215 },
      { station: stations.NEWARK_PENN, departAt: 1222 },
      { station: stations.SECAUCUS, departAt: 1229 },
      { station: stations.NEW_YORK, departAt: 1242 }
    ]
  },
  {
    trainNumber: '7830',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1118 },
      { station: stations.HAMILTON, departAt: 1124 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1131 },
      { station: stations.NEW_BRUNSWICK, departAt: 1148 },
      { station: stations.EDISON, departAt: 1153 },
      { station: stations.METUCHEN, departAt: 1158 },
      { station: stations.METROPARK, departAt: 1203 },
      { station: stations.NEWARK_AIRPORT, departAt: 1218 },
      { station: stations.NEWARK_PENN, departAt: 1225 },
      { station: stations.SECAUCUS, departAt: 1232 },
      { station: stations.NEW_YORK, departAt: 1244 }
    ]
  },
  {
    trainNumber: '7632',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 1242 },
      { station: stations.LINDEN, departAt: 1246 },
      { station: stations.ELIZABETH, departAt: 1252 },
      { station: stations.NORTH_ELIZABETH, departAt: 1255 },
      { station: stations.NEWARK_AIRPORT, departAt: 1259 },
      { station: stations.NEWARK_PENN, departAt: 1307 },
      { station: stations.SECAUCUS, departAt: 1317 },
      { station: stations.NEW_YORK, departAt: 1333 }
    ]
  },
  {
    trainNumber: '7832',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1159 },
      { station: stations.HAMILTON, departAt: 1205 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1212 },
      { station: stations.NEW_BRUNSWICK, departAt: 1229 },
      { station: stations.EDISON, departAt: 1234 },
      { station: stations.METUCHEN, departAt: 1239 },
      { station: stations.METROPARK, departAt: 1244 },
      { station: stations.RAHWAY, departAt: 1251 },
      { station: stations.LINDEN, departAt: 1255 },
      { station: stations.ELIZABETH, departAt: 1301 },
      { station: stations.NEWARK_AIRPORT, departAt: 1306 },
      { station: stations.NEWARK_PENN, departAt: 1312 },
      { station: stations.SECAUCUS, departAt: 1320 },
      { station: stations.NEW_YORK, departAt: 1335 }
    ]
  },
  {
    trainNumber: '7232',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 1300 },
      { station: stations.LINDEN, departAt: 1304 },
      { station: stations.ELIZABETH, departAt: 1310 },
      { station: stations.NEWARK_AIRPORT, departAt: 1315 },
      { station: stations.NEWARK_PENN, departAt: 1322 },
      { station: stations.SECAUCUS, departAt: 1329 },
      { station: stations.NEW_YORK, departAt: 1342 }
    ]
  },
  {
    trainNumber: '7834',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1217 },
      { station: stations.HAMILTON, departAt: 1223 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1230 },
      { station: stations.NEW_BRUNSWICK, departAt: 1247 },
      { station: stations.EDISON, departAt: 1252 },
      { station: stations.METUCHEN, departAt: 1257 },
      { station: stations.METROPARK, departAt: 1302 },
      { station: stations.NEWARK_AIRPORT, departAt: 1317 },
      { station: stations.NEWARK_PENN, departAt: 1324 },
      { station: stations.SECAUCUS, departAt: 1331 },
      { station: stations.NEW_YORK, departAt: 1344 }
    ]
  },
  {
    trainNumber: '7836',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1257 },
      { station: stations.HAMILTON, departAt: 1303 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1310 },
      { station: stations.NEW_BRUNSWICK, departAt: 1327 },
      { station: stations.EDISON, departAt: 1332 },
      { station: stations.METUCHEN, departAt: 1337 },
      { station: stations.METROPARK, departAt: 1342 },
      { station: stations.RAHWAY, departAt: 1349 },
      { station: stations.LINDEN, departAt: 1353 },
      { station: stations.ELIZABETH, departAt: 1359 },
      { station: stations.NEWARK_AIRPORT, departAt: 1404 },
      { station: stations.NEWARK_PENN, departAt: 1410 },
      { station: stations.SECAUCUS, departAt: 1418 },
      { station: stations.NEW_YORK, departAt: 1433 }
    ]
  },
  {
    trainNumber: '7236',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 1358 },
      { station: stations.LINDEN, departAt: 1402 },
      { station: stations.ELIZABETH, departAt: 1408 },
      { station: stations.NORTH_ELIZABETH, departAt: 1411 },
      { station: stations.NEWARK_AIRPORT, departAt: 1415 },
      { station: stations.NEWARK_PENN, departAt: 1422 },
      { station: stations.SECAUCUS, departAt: 1429 },
      { station: stations.NEW_YORK, departAt: 1442 }
    ]
  },
  {
    trainNumber: '7838',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1318 },
      { station: stations.HAMILTON, departAt: 1324 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1331 },
      { station: stations.NEW_BRUNSWICK, departAt: 1348 },
      { station: stations.EDISON, departAt: 1353 },
      { station: stations.METUCHEN, departAt: 1358 },
      { station: stations.METROPARK, departAt: 1403 },
      { station: stations.NEWARK_AIRPORT, departAt: 1418 },
      { station: stations.NEWARK_PENN, departAt: 1424 },
      { station: stations.SECAUCUS, departAt: 1431 },
      { station: stations.NEW_YORK, departAt: 1444 }
    ]
  },
  {
    trainNumber: '7840',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1359 },
      { station: stations.HAMILTON, departAt: 1406 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1413 },
      { station: stations.NEW_BRUNSWICK, departAt: 1429 },
      { station: stations.EDISON, departAt: 1434 },
      { station: stations.METUCHEN, departAt: 1439 },
      { station: stations.METROPARK, departAt: 1444 },
      { station: stations.RAHWAY, departAt: 1451 },
      { station: stations.LINDEN, departAt: 1455 },
      { station: stations.ELIZABETH, departAt: 1501 },
      { station: stations.NEWARK_AIRPORT, departAt: 1506 },
      { station: stations.NEWARK_PENN, departAt: 1512 },
      { station: stations.SECAUCUS, departAt: 1520 },
      { station: stations.NEW_YORK, departAt: 1534 }
    ]
  },
  {
    trainNumber: '7240',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 1458 },
      { station: stations.LINDEN, departAt: 1502 },
      { station: stations.ELIZABETH, departAt: 1508 },
      { station: stations.NORTH_ELIZABETH, departAt: 1511 },
      { station: stations.NEWARK_AIRPORT, departAt: 1515 },
      { station: stations.NEWARK_PENN, departAt: 1522 },
      { station: stations.SECAUCUS, departAt: 1529 },
      { station: stations.NEW_YORK, departAt: 1542 }
    ]
  },
  {
    trainNumber: '7844',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1457 },
      { station: stations.HAMILTON, departAt: 1503 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1510 },
      { station: stations.NEW_BRUNSWICK, departAt: 1527 },
      { station: stations.EDISON, departAt: 1532 },
      { station: stations.METUCHEN, departAt: 1537 },
      { station: stations.METROPARK, departAt: 1542 },
      { station: stations.RAHWAY, departAt: 1549 },
      { station: stations.LINDEN, departAt: 1553 },
      { station: stations.ELIZABETH, departAt: 1559 },
      { station: stations.NEWARK_AIRPORT, departAt: 1604 },
      { station: stations.NEWARK_PENN, departAt: 1610 },
      { station: stations.SECAUCUS, departAt: 1618 },
      { station: stations.NEW_YORK, departAt: 1633 }
    ]
  },
  {
    trainNumber: '7244',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 1558 },
      { station: stations.LINDEN, departAt: 1602 },
      { station: stations.ELIZABETH, departAt: 1608 },
      { station: stations.NORTH_ELIZABETH, departAt: 1611 },
      { station: stations.NEWARK_AIRPORT, departAt: 1615 },
      { station: stations.NEWARK_PENN, departAt: 1622 },
      { station: stations.SECAUCUS, departAt: 1630 },
      { station: stations.NEW_YORK, departAt: 1643 }
    ]
  },
  {
    trainNumber: '7846',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1522 },
      { station: stations.HAMILTON, departAt: 1529 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1536 },
      { station: stations.NEW_BRUNSWICK, departAt: 1551 },
      { station: stations.EDISON, departAt: 1555 },
      { station: stations.METUCHEN, departAt: 1601 },
      { station: stations.METROPARK, departAt: 1606 },
      { station: stations.NEWARK_AIRPORT, departAt: 1620 },
      { station: stations.NEWARK_PENN, departAt: 1626 },
      { station: stations.SECAUCUS, departAt: 1633 },
      { station: stations.NEW_YORK, departAt: 1646 }
    ]
  },
  {
    trainNumber: '7848',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1602 },
      { station: stations.HAMILTON, departAt: 1608 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1615 },
      { station: stations.NEW_BRUNSWICK, departAt: 1632 },
      { station: stations.EDISON, departAt: 1636 },
      { station: stations.METUCHEN, departAt: 1641 },
      { station: stations.METROPARK, departAt: 1646 },
      { station: stations.RAHWAY, departAt: 1653 },
      { station: stations.LINDEN, departAt: 1657 },
      { station: stations.ELIZABETH, departAt: 1703 },
      { station: stations.NEWARK_AIRPORT, departAt: 1708 },
      { station: stations.NEWARK_PENN, departAt: 1715 },
      { station: stations.SECAUCUS, departAt: 1723 },
      { station: stations.NEW_YORK, departAt: 1736 }
    ]
  },
  {
    trainNumber: '7248',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 1658 },
      { station: stations.LINDEN, departAt: 1702 },
      { station: stations.ELIZABETH, departAt: 1708 },
      { station: stations.NORTH_ELIZABETH, departAt: 1711 },
      { station: stations.NEWARK_AIRPORT, departAt: 1715 },
      { station: stations.NEWARK_PENN, departAt: 1722 },
      { station: stations.SECAUCUS, departAt: 1729 },
      { station: stations.NEW_YORK, departAt: 1743 }
    ]
  },
  {
    trainNumber: '7850',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1618 },
      { station: stations.HAMILTON, departAt: 1624 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1631 },
      { station: stations.NEW_BRUNSWICK, departAt: 1648 },
      { station: stations.EDISON, departAt: 1653 },
      { station: stations.METUCHEN, departAt: 1658 },
      { station: stations.METROPARK, departAt: 1703 },
      { station: stations.NEWARK_AIRPORT, departAt: 1718 },
      { station: stations.NEWARK_PENN, departAt: 1725 },
      { station: stations.SECAUCUS, departAt: 1732 },
      { station: stations.NEW_YORK, departAt: 1746 }
    ]
  },
  {
    trainNumber: '7852',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1659 },
      { station: stations.HAMILTON, departAt: 1705 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1712 },
      { station: stations.NEW_BRUNSWICK, departAt: 1729 },
      { station: stations.EDISON, departAt: 1734 },
      { station: stations.METUCHEN, departAt: 1739 },
      { station: stations.METROPARK, departAt: 1744 },
      { station: stations.RAHWAY, departAt: 1751 },
      { station: stations.LINDEN, departAt: 1755 },
      { station: stations.ELIZABETH, departAt: 1801 },
      { station: stations.NEWARK_AIRPORT, departAt: 1806 },
      { station: stations.NEWARK_PENN, departAt: 1812 },
      { station: stations.SECAUCUS, departAt: 1820 },
      { station: stations.NEW_YORK, departAt: 1833 }
    ]
  },
  {
    trainNumber: '7252',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 1758 },
      { station: stations.LINDEN, departAt: 1802 },
      { station: stations.ELIZABETH, departAt: 1808 },
      { station: stations.NORTH_ELIZABETH, departAt: 1811 },
      { station: stations.NEWARK_AIRPORT, departAt: 1815 },
      { station: stations.NEWARK_PENN, departAt: 1821 },
      { station: stations.SECAUCUS, departAt: 1828 },
      { station: stations.NEW_YORK, departAt: 1841 }
    ]
  },
  {
    trainNumber: '7854',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1719 },
      { station: stations.HAMILTON, departAt: 1725 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1732 },
      { station: stations.NEW_BRUNSWICK, departAt: 1749 },
      { station: stations.EDISON, departAt: 1754 },
      { station: stations.METUCHEN, departAt: 1759 },
      { station: stations.METROPARK, departAt: 1804 },
      { station: stations.NEWARK_AIRPORT, departAt: 1818 },
      { station: stations.NEWARK_PENN, departAt: 1824 },
      { station: stations.SECAUCUS, departAt: 1831 },
      { station: stations.NEW_YORK, departAt: 1844 }
    ]
  },
  {
    trainNumber: '7856',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1759 },
      { station: stations.HAMILTON, departAt: 1806 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1813 },
      { station: stations.NEW_BRUNSWICK, departAt: 1829 },
      { station: stations.EDISON, departAt: 1834 },
      { station: stations.METUCHEN, departAt: 1839 },
      { station: stations.METROPARK, departAt: 1844 },
      { station: stations.RAHWAY, departAt: 1851 },
      { station: stations.LINDEN, departAt: 1855 },
      { station: stations.ELIZABETH, departAt: 1901 },
      { station: stations.NEWARK_AIRPORT, departAt: 1906 },
      { station: stations.NEWARK_PENN, departAt: 1912 },
      { station: stations.SECAUCUS, departAt: 1920 },
      { station: stations.NEW_YORK, departAt: 1934 }
    ]
  },
  {
    trainNumber: '7256',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 1858 },
      { station: stations.LINDEN, departAt: 1902 },
      { station: stations.ELIZABETH, departAt: 1908 },
      { station: stations.NORTH_ELIZABETH, departAt: 1911 },
      { station: stations.NEWARK_AIRPORT, departAt: 1915 },
      { station: stations.NEWARK_PENN, departAt: 1922 },
      { station: stations.SECAUCUS, departAt: 1929 },
      { station: stations.NEW_YORK, departAt: 1942 }
    ]
  },
  {
    trainNumber: '7858',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1819 },
      { station: stations.HAMILTON, departAt: 1825 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1832 },
      { station: stations.NEW_BRUNSWICK, departAt: 1849 },
      { station: stations.EDISON, departAt: 1854 },
      { station: stations.METUCHEN, departAt: 1859 },
      { station: stations.METROPARK, departAt: 1704 },
      { station: stations.NEWARK_AIRPORT, departAt: 1719 },
      { station: stations.NEWARK_PENN, departAt: 1728 },
      { station: stations.SECAUCUS, departAt: 1735 },
      { station: stations.NEW_YORK, departAt: 1748 }
    ]
  },
  {
    trainNumber: '7860',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1857 },
      { station: stations.HAMILTON, departAt: 1903 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1910 },
      { station: stations.NEW_BRUNSWICK, departAt: 1927 },
      { station: stations.EDISON, departAt: 1932 },
      { station: stations.METUCHEN, departAt: 1937 },
      { station: stations.METROPARK, departAt: 1942 },
      { station: stations.RAHWAY, departAt: 1949 },
      { station: stations.LINDEN, departAt: 1953 },
      { station: stations.ELIZABETH, departAt: 1959 },
      { station: stations.NEWARK_AIRPORT, departAt: 2004 },
      { station: stations.NEWARK_PENN, departAt: 2010 },
      { station: stations.SECAUCUS, departAt: 2018 },
      { station: stations.NEW_YORK, departAt: 2032 }
    ]
  },
  {
    trainNumber: '7260',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 1958 },
      { station: stations.LINDEN, departAt: 2002 },
      { station: stations.ELIZABETH, departAt: 2008 },
      { station: stations.NORTH_ELIZABETH, departAt: 2011 },
      { station: stations.NEWARK_AIRPORT, departAt: 2015 },
      { station: stations.NEWARK_PENN, departAt: 2022 },
      { station: stations.SECAUCUS, departAt: 2030 },
      { station: stations.NEW_YORK, departAt: 2043 }
    ]
  },
  {
    trainNumber: '7864',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 1957 },
      { station: stations.HAMILTON, departAt: 2003 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2010 },
      { station: stations.NEW_BRUNSWICK, departAt: 2027 },
      { station: stations.EDISON, departAt: 2032 },
      { station: stations.METUCHEN, departAt: 2037 },
      { station: stations.METROPARK, departAt: 2042 },
      { station: stations.RAHWAY, departAt: 2049 },
      { station: stations.LINDEN, departAt: 2053 },
      { station: stations.ELIZABETH, departAt: 2059 },
      { station: stations.NEWARK_AIRPORT, departAt: 2104 },
      { station: stations.NEWARK_PENN, departAt: 2110 },
      { station: stations.SECAUCUS, departAt: 2118 },
      { station: stations.NEW_YORK, departAt: 2133 }
    ]
  },
  {
    trainNumber: '7264',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 2058 },
      { station: stations.LINDEN, departAt: 2102 },
      { station: stations.ELIZABETH, departAt: 2108 },
      { station: stations.NORTH_ELIZABETH, departAt: 2111 },
      { station: stations.NEWARK_AIRPORT, departAt: 2115 },
      { station: stations.NEWARK_PENN, departAt: 2122 },
      { station: stations.SECAUCUS, departAt: 2129 },
      { station: stations.NEW_YORK, departAt: 2142 }
    ]
  },
  {
    trainNumber: '7868',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 2057 },
      { station: stations.HAMILTON, departAt: 2103 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2110 },
      { station: stations.NEW_BRUNSWICK, departAt: 2127 },
      { station: stations.EDISON, departAt: 2132 },
      { station: stations.METUCHEN, departAt: 2137 },
      { station: stations.METROPARK, departAt: 2142 },
      { station: stations.RAHWAY, departAt: 2149 },
      { station: stations.LINDEN, departAt: 2153 },
      { station: stations.ELIZABETH, departAt: 2159 },
      { station: stations.NEWARK_AIRPORT, departAt: 2204 },
      { station: stations.NEWARK_PENN, departAt: 2210 },
      { station: stations.SECAUCUS, departAt: 2217 },
      { station: stations.NEW_YORK, departAt: 2232 }
    ]
  },
  {
    trainNumber: '7268',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 2200 },
      { station: stations.LINDEN, departAt: 2204 },
      { station: stations.ELIZABETH, departAt: 2210 },
      { station: stations.NEWARK_AIRPORT, departAt: 2215 },
      { station: stations.NEWARK_PENN, departAt: 2222 },
      { station: stations.SECAUCUS, departAt: 2229 },
      { station: stations.NEW_YORK, departAt: 2242 }
    ]
  },
  {
    trainNumber: '7872',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 2157 },
      { station: stations.HAMILTON, departAt: 2203 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2210 },
      { station: stations.NEW_BRUNSWICK, departAt: 2227 },
      { station: stations.EDISON, departAt: 2232 },
      { station: stations.METUCHEN, departAt: 2237 },
      { station: stations.METROPARK, departAt: 2242 },
      { station: stations.RAHWAY, departAt: 2249 },
      { station: stations.LINDEN, departAt: 2253 },
      { station: stations.ELIZABETH, departAt: 2259 },
      { station: stations.NEWARK_AIRPORT, departAt: 2304 },
      { station: stations.NEWARK_PENN, departAt: 2310 },
      { station: stations.SECAUCUS, departAt: 2317 },
      { station: stations.NEW_YORK, departAt: 2332 }
    ]
  },
  {
    trainNumber: '7272',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 2258 },
      { station: stations.LINDEN, departAt: 2302 },
      { station: stations.ELIZABETH, departAt: 2308 },
      { station: stations.NORTH_ELIZABETH, departAt: 2311 },
      { station: stations.NEWARK_AIRPORT, departAt: 2315 },
      { station: stations.NEWARK_PENN, departAt: 2322 },
      { station: stations.SECAUCUS, departAt: 2329 },
      { station: stations.NEW_YORK, departAt: 2342 }
    ]
  },
  {
    trainNumber: '7876',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 2257 },
      { station: stations.HAMILTON, departAt: 2303 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2310 },
      { station: stations.NEW_BRUNSWICK, departAt: 2327 },
      { station: stations.EDISON, departAt: 2332 },
      { station: stations.METUCHEN, departAt: 2337 },
      { station: stations.METROPARK, departAt: 2342 },
      { station: stations.RAHWAY, departAt: 2349 },
      { station: stations.LINDEN, departAt: 2353 },
      { station: stations.ELIZABETH, departAt: 2359 },
      { station: stations.NEWARK_AIRPORT, departAt: 2404 },
      { station: stations.NEWARK_PENN, departAt: 2410 },
      { station: stations.SECAUCUS, departAt: 2417 },
      { station: stations.NEW_YORK, departAt: 2432 }
    ]
  },
  {
    trainNumber: '7276',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 2428 },
      { station: stations.LINDEN, departAt: 2432 },
      { station: stations.ELIZABETH, departAt: 2438 },
      { station: stations.NEWARK_AIRPORT, departAt: 2443 },
      { station: stations.NEWARK_PENN, departAt: 2450 },
      { station: stations.SECAUCUS, departAt: 2458 },
      { station: stations.NEW_YORK, departAt: 2518 }
    ]
  },
  {
    trainNumber: '7880',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 2357 },
      { station: stations.HAMILTON, departAt: 2403 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2410 },
      { station: stations.NEW_BRUNSWICK, departAt: 2427 },
      { station: stations.EDISON, departAt: 2432 },
      { station: stations.METUCHEN, departAt: 2437 },
      { station: stations.METROPARK, departAt: 2442 },
      { station: stations.RAHWAY, departAt: 2449 },
      { station: stations.LINDEN, departAt: 2453 },
      { station: stations.ELIZABETH, departAt: 2459 },
      { station: stations.NEWARK_AIRPORT, departAt: 2504 },
      { station: stations.NEWARK_PENN, departAt: 2510 },
      { station: stations.SECAUCUS, departAt: 2517 },
      { station: stations.NEW_YORK, departAt: 2536 }
    ]
  },
  {
    trainNumber: '7200',
    isWeekend: true,
    routes: [
      { station: stations.RAHWAY, departAt: 2515 },
      { station: stations.LINDEN, departAt: 2519 },
      { station: stations.ELIZABETH, departAt: 2525 },
      { station: stations.NORTH_ELIZABETH, departAt: 2528 },
      { station: stations.NEWARK_AIRPORT, departAt: 2531 },
      { station: stations.NEWARK_PENN, departAt: 2536 },
      { station: stations.SECAUCUS, departAt: 2544 },
      { station: stations.NEW_YORK, departAt: 2603 }
    ]
  },
  {
    trainNumber: '7800',
    isWeekend: true,
    routes: [
      { station: stations.TRENTON, departAt: 2500 },
      { station: stations.HAMILTON, departAt: 2506 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2514 },
      { station: stations.NEW_BRUNSWICK, departAt: 2530 },
      { station: stations.EDISON, departAt: 2535 },
      { station: stations.METUCHEN, departAt: 2540 },
      { station: stations.METROPARK, departAt: 2545 },
      { station: stations.RAHWAY, departAt: 2552 },
      { station: stations.LINDEN, departAt: 2556 },
      { station: stations.ELIZABETH, departAt: 2602 },
      { station: stations.NEWARK_AIRPORT, departAt: 2607 },
      { station: stations.NEWARK_PENN, departAt: 2613 },
      { station: stations.SECAUCUS, departAt: 2621 },
      { station: stations.NEW_YORK, departAt: 2646 }
    ]
  }
];

export default trainRoutes;