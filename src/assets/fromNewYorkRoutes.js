import stations from '../constants/stations';

const trainRoutes = [
  {
    trainNumber: '3809',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 417 },
      { station: stations.SECAUCUS, departAt: 426 },
      { station: stations.NEWARK_PENN, departAt: 437 },
      { station: stations.NEWARK_AIRPORT, departAt: 442 },
      { station: stations.NORTH_ELIZABETH, departAt: 445 },
      { station: stations.ELIZABETH, departAt: 448 },
      { station: stations.LINDEN, departAt: 454 },
      { station: stations.RAHWAY, departAt: 457 },
      { station: stations.METROPARK, departAt: 503 },
      { station: stations.METUCHEN, departAt: 508 },
      { station: stations.EDISON, departAt: 513 },
      { station: stations.NEW_BRUNSWICK, departAt: 517 },
      { station: stations.PRINCETON_JUNCTION, departAt: 534 },
      { station: stations.HAMILTON, departAt: 542 },
      { station: stations.TRENTON, departAt: 554 }
    ]
  },
  {
    trainNumber: '3209',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 430 },
      { station: stations.NEWARK_PENN, departAt: 446 },
      { station: stations.NEWARK_AIRPORT, departAt: 452 },
      { station: stations.NORTH_ELIZABETH, departAt: 455 },
      { station: stations.ELIZABETH, departAt: 458 },
      { station: stations.LINDEN, departAt: 503 },
      { station: stations.RAHWAY, departAt: 507 }
    ]
  },
  {
    trainNumber: '3813',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 507 },
      { station: stations.SECAUCUS, departAt: 516 },
      { station: stations.NEWARK_PENN, departAt: 525 },
      { station: stations.NEWARK_AIRPORT, departAt: 531 },
      { station: stations.NORTH_ELIZABETH, departAt: 534 },
      { station: stations.ELIZABETH, departAt: 537 },
      { station: stations.LINDEN, departAt: 543 },
      { station: stations.RAHWAY, departAt: 546 },
      { station: stations.METROPARK, departAt: 552 },
      { station: stations.METUCHEN, departAt: 557 },
      { station: stations.EDISON, departAt: 602 },
      { station: stations.NEW_BRUNSWICK, departAt: 606 },
      { station: stations.JERSEY_AVENUE, departAt: 611 },
      { station: stations.PRINCETON_JUNCTION, departAt: 623 },
      { station: stations.HAMILTON, departAt: 630 },
      { station: stations.TRENTON, departAt: 642 }
    ]
  },
  {
    trainNumber: '3215',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 532 },
      { station: stations.SECAUCUS, departAt: 542 },
      { station: stations.NEWARK_PENN, departAt: 551 },
      { station: stations.NEWARK_AIRPORT, departAt: 556 },
      { station: stations.NORTH_ELIZABETH, departAt: 559 },
      { station: stations.ELIZABETH, departAt: 602 },
      { station: stations.LINDEN, departAt: 608 },
      { station: stations.RAHWAY, departAt: 611 }
    ]
  },
  {
    trainNumber: '3701',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 541 },
      { station: stations.SECAUCUS, departAt: 550 },
      { station: stations.NEWARK_PENN, departAt: 558 },
      { station: stations.NEWARK_AIRPORT, departAt: 603 },
      { station: stations.METROPARK, departAt: 617 },
      { station: stations.NEW_BRUNSWICK, departAt: 626 },
      { station: stations.JERSEY_AVENUE, departAt: 633 }
    ]
  },
  {
    trainNumber: '3815',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 611 },
      { station: stations.SECAUCUS, departAt: 620 },
      { station: stations.NEWARK_PENN, departAt: 628 },
      { station: stations.NEWARK_AIRPORT, departAt: 633 },
      { station: stations.ELIZABETH, departAt: 638 },
      { station: stations.LINDEN, departAt: 643 },
      { station: stations.RAHWAY, departAt: 647 },
      { station: stations.METROPARK, departAt: 653 },
      { station: stations.METUCHEN, departAt: 657 },
      { station: stations.EDISON, departAt: 702 },
      { station: stations.NEW_BRUNSWICK, departAt: 707 },
      { station: stations.PRINCETON_JUNCTION, departAt: 722 },
      { station: stations.HAMILTON, departAt: 729 },
      { station: stations.TRENTON, departAt: 738 }
    ]
  },
  {
    trainNumber: '3217',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 620 },
      { station: stations.SECAUCUS, departAt: 629 },
      { station: stations.NEWARK_PENN, departAt: 637 },
      { station: stations.NEWARK_AIRPORT, departAt: 642 },
      { station: stations.NORTH_ELIZABETH, departAt: 645 },
      { station: stations.ELIZABETH, departAt: 648 },
      { station: stations.LINDEN, departAt: 653 },
      { station: stations.RAHWAY, departAt: 657 }
    ]
  },
  {
    trainNumber: '3705',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 631 },
      { station: stations.SECAUCUS, departAt: 640 },
      { station: stations.NEWARK_PENN, departAt: 648 },
      { station: stations.NEWARK_AIRPORT, departAt: 653 },
      { station: stations.METROPARK, departAt: 707 },
      { station: stations.NEW_BRUNSWICK, departAt: 716 },
      { station: stations.JERSEY_AVENUE, departAt: 723 }
    ]
  },
  {
    trainNumber: '3817',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 638 },
      { station: stations.SECAUCUS, departAt: 647 },
      { station: stations.NEWARK_PENN, departAt: 655 },
      { station: stations.NEWARK_AIRPORT, departAt: 700 },
      { station: stations.NORTH_ELIZABETH, departAt: 703 },
      { station: stations.ELIZABETH, departAt: 706 },
      { station: stations.LINDEN, departAt: 712 },
      { station: stations.RAHWAY, departAt: 715 },
      { station: stations.METROPARK, departAt: 721 },
      { station: stations.METUCHEN, departAt: 726 },
      { station: stations.EDISON, departAt: 731 },
      { station: stations.NEW_BRUNSWICK, departAt: 736 },
      { station: stations.PRINCETON_JUNCTION, departAt: 756 },
      { station: stations.HAMILTON, departAt: 803 },
      { station: stations.TRENTON, departAt: 813 }
    ]
  },
  {
    trainNumber: '3221',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 701 },
      { station: stations.SECAUCUS, departAt: 710 },
      { station: stations.NEWARK_PENN, departAt: 718 },
      { station: stations.NEWARK_AIRPORT, departAt: 723 },
      { station: stations.NORTH_ELIZABETH, departAt: 727 },
      { station: stations.ELIZABETH, departAt: 730 },
      { station: stations.LINDEN, departAt: 735 },
      { station: stations.RAHWAY, departAt: 739 }
    ]
  },
  {
    trainNumber: '3821',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 714 },
      { station: stations.SECAUCUS, departAt: 723 },
      { station: stations.NEWARK_PENN, departAt: 731 },
      { station: stations.NEWARK_AIRPORT, departAt: 736 },
      { station: stations.ELIZABETH, departAt: 741 },
      { station: stations.LINDEN, departAt: 746 },
      { station: stations.RAHWAY, departAt: 750 },
      { station: stations.METROPARK, departAt: 757 },
      { station: stations.METUCHEN, departAt: 802 },
      { station: stations.EDISON, departAt: 807 },
      { station: stations.NEW_BRUNSWICK, departAt: 811 },
      { station: stations.PRINCETON_JUNCTION, departAt: 826 },
      { station: stations.HAMILTON, departAt: 833 },
      { station: stations.TRENTON, departAt: 845 }
    ]
  },
  {
    trainNumber: '3709',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 727 },
      { station: stations.SECAUCUS, departAt: 736 },
      { station: stations.NEWARK_PENN, departAt: 744 },
      { station: stations.NEWARK_AIRPORT, departAt: 749 },
      { station: stations.METROPARK, departAt: 804 },
      { station: stations.METUCHEN, departAt: 809 },
      { station: stations.EDISON, departAt: 814 },
      { station: stations.NEW_BRUNSWICK, departAt: 818 },
      { station: stations.JERSEY_AVENUE, departAt: 825 }
    ]
  },
  {
    trainNumber: '3711',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 735 },
      { station: stations.SECAUCUS, departAt: 744 },
      { station: stations.NEWARK_PENN, departAt: 752 },
      { station: stations.ELIZABETH, departAt: 800 },
      { station: stations.LINDEN, departAt: 806 },
      { station: stations.RAHWAY, departAt: 810 },
      { station: stations.METROPARK, departAt: 815 },
      { station: stations.METUCHEN, departAt: 820 },
      { station: stations.EDISON, departAt: 825 },
      { station: stations.NEW_BRUNSWICK, departAt: 829 },
      { station: stations.JERSEY_AVENUE, departAt: 845 }
    ]
  },
  {
    trainNumber: '3223',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 744 },
      { station: stations.SECAUCUS, departAt: 753 },
      { station: stations.NEWARK_PENN, departAt: 802 },
      { station: stations.NEWARK_AIRPORT, departAt: 808 },
      { station: stations.NORTH_ELIZABETH, departAt: 811 },
      { station: stations.ELIZABETH, departAt: 814 },
      { station: stations.LINDEN, departAt: 819 },
      { station: stations.RAHWAY, departAt: 823 }
    ]
  },
  {
    trainNumber: '3823',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 753 },
      { station: stations.SECAUCUS, departAt: 802 },
      { station: stations.NEWARK_PENN, departAt: 810 },
      { station: stations.NEWARK_AIRPORT, departAt: 816 },
      { station: stations.RAHWAY, departAt: 827 },
      { station: stations.METROPARK, departAt: 834 },
      { station: stations.METUCHEN, departAt: 839 },
      { station: stations.EDISON, departAt: 844 },
      { station: stations.NEW_BRUNSWICK, departAt: 848 },
      { station: stations.JERSEY_AVENUE, departAt: 855 },
      { station: stations.PRINCETON_JUNCTION, departAt: 908 },
      { station: stations.HAMILTON, departAt: 914 },
      { station: stations.TRENTON, departAt: 924 }
    ]
  },
  {
    trainNumber: '3713',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 805 },
      { station: stations.SECAUCUS, departAt: 814 },
      { station: stations.NEWARK_PENN, departAt: 823 },
      { station: stations.NEWARK_AIRPORT, departAt: 829 },
      { station: stations.NORTH_ELIZABETH, departAt: 832 },
      { station: stations.ELIZABETH, departAt: 835 },
      { station: stations.LINDEN, departAt: 840 },
      { station: stations.RAHWAY, departAt: 844 },
      { station: stations.METROPARK, departAt: 851 },
      { station: stations.NEW_BRUNSWICK, departAt: 900 },
      { station: stations.JERSEY_AVENUE, departAt: 906 }
    ]
  },
  {
    trainNumber: '3825',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 812 },
      { station: stations.SECAUCUS, departAt: 821 },
      { station: stations.NEWARK_PENN, departAt: 830 },
      { station: stations.NEWARK_AIRPORT, departAt: 836 },
      { station: stations.ELIZABETH, departAt: 841 },
      { station: stations.LINDEN, departAt: 846 },
      { station: stations.RAHWAY, departAt: 850 },
      { station: stations.METROPARK, departAt: 857 },
      { station: stations.METUCHEN, departAt: 902 },
      { station: stations.EDISON, departAt: 907 },
      { station: stations.NEW_BRUNSWICK, departAt: 911 },
      { station: stations.PRINCETON_JUNCTION, departAt: 926 },
      { station: stations.HAMILTON, departAt: 933 },
      { station: stations.TRENTON, departAt: 945 }
    ]
  },
  {
    trainNumber: '3827',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 828 },
      { station: stations.SECAUCUS, departAt: 837 },
      { station: stations.NEWARK_PENN, departAt: 846 },
      { station: stations.NEWARK_AIRPORT, departAt: 852 },
      { station: stations.NORTH_ELIZABETH, departAt: 855 },
      { station: stations.ELIZABETH, departAt: 858 },
      { station: stations.LINDEN, departAt: 903 },
      { station: stations.RAHWAY, departAt: 907 },
      { station: stations.METROPARK, departAt: 912 },
      { station: stations.METUCHEN, departAt: 917 },
      { station: stations.EDISON, departAt: 921 },
      { station: stations.NEW_BRUNSWICK, departAt: 926 },
      { station: stations.PRINCETON_JUNCTION, departAt: 947 },
      { station: stations.HAMILTON, departAt: 954 },
      { station: stations.TRENTON, departAt: 1003 }
    ]
  },
  {
    trainNumber: '3915',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 839 },
      { station: stations.SECAUCUS, departAt: 848 },
      { station: stations.NEWARK_PENN, departAt: 857 },
      { station: stations.NEWARK_AIRPORT, departAt: 903 },
      { station: stations.RAHWAY, departAt: 914 },
      { station: stations.METROPARK, departAt: 919 },
      { station: stations.METUCHEN, departAt: 924 },
      { station: stations.EDISON, departAt: 929 },
      { station: stations.NEW_BRUNSWICK, departAt: 934 },
      { station: stations.PRINCETON_JUNCTION, departAt: 954 },
      { station: stations.HAMILTON, departAt: 1001 },
      { station: stations.TRENTON, departAt: 1010 }
    ]
  },
  {
    trainNumber: '3227',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 845 },
      { station: stations.SECAUCUS, departAt: 854 },
      { station: stations.NEWARK_PENN, departAt: 903 },
      { station: stations.NEWARK_AIRPORT, departAt: 909 },
      { station: stations.ELIZABETH, departAt: 913 },
      { station: stations.LINDEN, departAt: 919 },
      { station: stations.RAHWAY, departAt: 922 }
    ]
  },
  {
    trainNumber: '3917',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 904 },
      { station: stations.SECAUCUS, departAt: 913 },
      { station: stations.NEWARK_PENN, departAt: 921 },
      { station: stations.NEWARK_AIRPORT, departAt: 927 },
      { station: stations.NEW_BRUNSWICK, departAt: 948 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1003 },
      { station: stations.HAMILTON, departAt: 1010 },
      { station: stations.TRENTON, departAt: 1019 }
    ]
  },
  {
    trainNumber: '3829',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 919 },
      { station: stations.SECAUCUS, departAt: 928 },
      { station: stations.NEWARK_PENN, departAt: 937 },
      { station: stations.NEWARK_AIRPORT, departAt: 942 },
      { station: stations.ELIZABETH, departAt: 947 },
      { station: stations.LINDEN, departAt: 952 },
      { station: stations.RAHWAY, departAt: 956 },
      { station: stations.METROPARK, departAt: 1002 },
      { station: stations.METUCHEN, departAt: 1006 },
      { station: stations.EDISON, departAt: 1011 },
      { station: stations.NEW_BRUNSWICK, departAt: 1015 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1031 },
      { station: stations.HAMILTON, departAt: 1037 },
      { station: stations.TRENTON, departAt: 1047 }
    ]
  },
  {
    trainNumber: '3831',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 937 },
      { station: stations.SECAUCUS, departAt: 946 },
      { station: stations.NEWARK_PENN, departAt: 955 },
      { station: stations.NEWARK_AIRPORT, departAt: 1001 },
      { station: stations.NORTH_ELIZABETH, departAt: 1004 },
      { station: stations.ELIZABETH, departAt: 1007 },
      { station: stations.LINDEN, departAt: 1012 },
      { station: stations.RAHWAY, departAt: 1016 },
      { station: stations.METROPARK, departAt: 1022 },
      { station: stations.METUCHEN, departAt: 1026 },
      { station: stations.EDISON, departAt: 1031 },
      { station: stations.NEW_BRUNSWICK, departAt: 1036 },
      { station: stations.JERSEY_AVENUE, departAt: 1040 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1053 },
      { station: stations.HAMILTON, departAt: 1100 },
      { station: stations.TRENTON, departAt: 1112 }
    ]
  },
  {
    trainNumber: '3231',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 946 },
      { station: stations.SECAUCUS, departAt: 955 },
      { station: stations.NEWARK_PENN, departAt: 1005 },
      { station: stations.NEWARK_AIRPORT, departAt: 1010 },
      { station: stations.ELIZABETH, departAt: 1015 },
      { station: stations.LINDEN, departAt: 1021 },
      { station: stations.RAHWAY, departAt: 1025 }
    ]
  },
  {
    trainNumber: '3833',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 959 },
      { station: stations.SECAUCUS, departAt: 1009 },
      { station: stations.NEWARK_PENN, departAt: 1019 },
      { station: stations.NEWARK_AIRPORT, departAt: 1024 },
      { station: stations.ELIZABETH, departAt: 1029 },
      { station: stations.LINDEN, departAt: 1034 },
      { station: stations.RAHWAY, departAt: 1038 },
      { station: stations.METROPARK, departAt: 1043 },
      { station: stations.METUCHEN, departAt: 1048 },
      { station: stations.EDISON, departAt: 1052 },
      { station: stations.NEW_BRUNSWICK, departAt: 1056 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1111 },
      { station: stations.HAMILTON, departAt: 1118 },
      { station: stations.TRENTON, departAt: 1126 }
    ]
  },
  {
    trainNumber: '3835',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1033 },
      { station: stations.SECAUCUS, departAt: 1042 },
      { station: stations.NEWARK_PENN, departAt: 1053 },
      { station: stations.NEWARK_AIRPORT, departAt: 1058 },
      { station: stations.NORTH_ELIZABETH, departAt: 1102 },
      { station: stations.ELIZABETH, departAt: 1105 },
      { station: stations.LINDEN, departAt: 1110 },
      { station: stations.RAHWAY, departAt: 1114 },
      { station: stations.METROPARK, departAt: 1120 },
      { station: stations.METUCHEN, departAt: 1125 },
      { station: stations.EDISON, departAt: 1130 },
      { station: stations.NEW_BRUNSWICK, departAt: 1134 },
      { station: stations.JERSEY_AVENUE, departAt: 1146 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1159 },
      { station: stations.HAMILTON, departAt: 1205 },
      { station: stations.TRENTON, departAt: 1214 }
    ]
  },
  {
    trainNumber: '3235',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1041 },
      { station: stations.SECAUCUS, departAt: 1051 },
      { station: stations.NEWARK_PENN, departAt: 1100 },
      { station: stations.NEWARK_AIRPORT, departAt: 1105 },
      { station: stations.ELIZABETH, departAt: 1110 },
      { station: stations.LINDEN, departAt: 1116 },
      { station: stations.RAHWAY, departAt: 1120 }
    ]
  },
  {
    trainNumber: '3837',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1106 },
      { station: stations.SECAUCUS, departAt: 1116 },
      { station: stations.NEWARK_PENN, departAt: 1124 },
      { station: stations.NEWARK_AIRPORT, departAt: 1130 },
      { station: stations.ELIZABETH, departAt: 1134 },
      { station: stations.LINDEN, departAt: 1139 },
      { station: stations.RAHWAY, departAt: 1143 },
      { station: stations.METROPARK, departAt: 1149 },
      { station: stations.METUCHEN, departAt: 1153 },
      { station: stations.EDISON, departAt: 1158 },
      { station: stations.NEW_BRUNSWICK, departAt: 1202 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1217 },
      { station: stations.HAMILTON, departAt: 1223 },
      { station: stations.TRENTON, departAt: 1236 }
    ]
  },
  {
    trainNumber: '3839',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1137 },
      { station: stations.SECAUCUS, departAt: 1146 },
      { station: stations.NEWARK_PENN, departAt: 1155 },
      { station: stations.NEWARK_AIRPORT, departAt: 1201 },
      { station: stations.NORTH_ELIZABETH, departAt: 1204 },
      { station: stations.ELIZABETH, departAt: 1207 },
      { station: stations.LINDEN, departAt: 1212 },
      { station: stations.RAHWAY, departAt: 1216 },
      { station: stations.METROPARK, departAt: 1222 },
      { station: stations.METUCHEN, departAt: 1226 },
      { station: stations.EDISON, departAt: 1231 },
      { station: stations.NEW_BRUNSWICK, departAt: 1236 },
      { station: stations.JERSEY_AVENUE, departAt: 1243 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1256 },
      { station: stations.HAMILTON, departAt: 1303 },
      { station: stations.TRENTON, departAt: 1313 }
    ]
  },
  {
    trainNumber: '3239',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1143 },
      { station: stations.SECAUCUS, departAt: 1153 },
      { station: stations.NEWARK_PENN, departAt: 1202 },
      { station: stations.NEWARK_AIRPORT, departAt: 1207 },
      { station: stations.ELIZABETH, departAt: 1212 },
      { station: stations.LINDEN, departAt: 1218 },
      { station: stations.RAHWAY, departAt: 1222 }
    ]
  },
  {
    trainNumber: '3841',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1201 },
      { station: stations.SECAUCUS, departAt: 1210 },
      { station: stations.NEWARK_PENN, departAt: 1219 },
      { station: stations.NEWARK_AIRPORT, departAt: 1225 },
      { station: stations.ELIZABETH, departAt: 1229 },
      { station: stations.LINDEN, departAt: 1235 },
      { station: stations.RAHWAY, departAt: 1238 },
      { station: stations.METROPARK, departAt: 1244 },
      { station: stations.METUCHEN, departAt: 1248 },
      { station: stations.EDISON, departAt: 1253 },
      { station: stations.NEW_BRUNSWICK, departAt: 1257 },
      { station: stations.JERSEY_AVENUE, departAt: 1301 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1314 },
      { station: stations.HAMILTON, departAt: 1321 },
      { station: stations.TRENTON, departAt: 1332 }
    ]
  },
  {
    trainNumber: '3843',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1237 },
      { station: stations.SECAUCUS, departAt: 1246 },
      { station: stations.NEWARK_PENN, departAt: 1255 },
      { station: stations.NEWARK_AIRPORT, departAt: 1300 },
      { station: stations.NORTH_ELIZABETH, departAt: 1304 },
      { station: stations.ELIZABETH, departAt: 1307 },
      { station: stations.LINDEN, departAt: 1312 },
      { station: stations.RAHWAY, departAt: 1316 },
      { station: stations.METROPARK, departAt: 1321 },
      { station: stations.METUCHEN, departAt: 1326 },
      { station: stations.EDISON, departAt: 1331 },
      { station: stations.NEW_BRUNSWICK, departAt: 1335 },
      { station: stations.JERSEY_AVENUE, departAt: 1340 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1353 },
      { station: stations.HAMILTON, departAt: 1359 },
      { station: stations.TRENTON, departAt: 1412 }
    ]
  },
  {
    trainNumber: '3243',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1243 },
      { station: stations.SECAUCUS, departAt: 1253 },
      { station: stations.NEWARK_PENN, departAt: 1302 },
      { station: stations.NEWARK_AIRPORT, departAt: 1307 },
      { station: stations.ELIZABETH, departAt: 1312 },
      { station: stations.LINDEN, departAt: 1318 },
      { station: stations.RAHWAY, departAt: 1322 },
    ]
  },
  {
    trainNumber: '3845',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1305 },
      { station: stations.SECAUCUS, departAt: 1314 },
      { station: stations.NEWARK_PENN, departAt: 1323 },
      { station: stations.NEWARK_AIRPORT, departAt: 1329 },
      { station: stations.ELIZABETH, departAt: 1333 },
      { station: stations.LINDEN, departAt: 1339 },
      { station: stations.RAHWAY, departAt: 1342 },
      { station: stations.METROPARK, departAt: 1348 },
      { station: stations.METUCHEN, departAt: 1352 },
      { station: stations.EDISON, departAt: 1357 },
      { station: stations.NEW_BRUNSWICK, departAt: 1401 },
      { station: stations.JERSEY_AVENUE, departAt: 1405 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1418 },
      { station: stations.HAMILTON, departAt: 1425 },
      { station: stations.TRENTON, departAt: 1437 }
    ]
  },
  {
    trainNumber: '3847',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1336 },
      { station: stations.SECAUCUS, departAt: 1345 },
      { station: stations.NEWARK_PENN, departAt: 1354 },
      { station: stations.NEWARK_AIRPORT, departAt: 1400 },
      { station: stations.NORTH_ELIZABETH, departAt: 1403 },
      { station: stations.ELIZABETH, departAt: 1406 },
      { station: stations.LINDEN, departAt: 1411 },
      { station: stations.RAHWAY, departAt: 1415 },
      { station: stations.METROPARK, departAt: 1421 },
      { station: stations.METUCHEN, departAt: 1425 },
      { station: stations.EDISON, departAt: 1430 },
      { station: stations.NEW_BRUNSWICK, departAt: 1435 },
      { station: stations.JERSEY_AVENUE, departAt: 1444 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1457 },
      { station: stations.HAMILTON, departAt: 1504 },
      { station: stations.TRENTON, departAt: 1513 }
    ]
  },
  {
    trainNumber: '3247',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1343 },
      { station: stations.SECAUCUS, departAt: 1353 },
      { station: stations.NEWARK_PENN, departAt: 1402 },
      { station: stations.NEWARK_AIRPORT, departAt: 1407 },
      { station: stations.RAHWAY, departAt: 1418 }
    ]
  },
  {
    trainNumber: '3849',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1407 },
      { station: stations.SECAUCUS, departAt: 1416 },
      { station: stations.NEWARK_PENN, departAt: 1425 },
      { station: stations.NEWARK_AIRPORT, departAt: 1431 },
      { station: stations.ELIZABETH, departAt: 1436 },
      { station: stations.LINDEN, departAt: 1441 },
      { station: stations.RAHWAY, departAt: 1445 },
      { station: stations.METROPARK, departAt: 1451 },
      { station: stations.METUCHEN, departAt: 1455 },
      { station: stations.EDISON, departAt: 1500 },
      { station: stations.NEW_BRUNSWICK, departAt: 1505 },
      { station: stations.JERSEY_AVENUE, departAt: 1509 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1522 },
      { station: stations.HAMILTON, departAt: 1529 },
      { station: stations.TRENTON, departAt: 1544 }
    ]
  },
  {
    trainNumber: '3719',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1429 },
      { station: stations.SECAUCUS, departAt: 1438 },
      { station: stations.NEWARK_PENN, departAt: 1448 },
      { station: stations.NEWARK_AIRPORT, departAt: 1454 },
      { station: stations.NORTH_ELIZABETH, departAt: 1457 },
      { station: stations.ELIZABETH, departAt: 1500 },
      { station: stations.LINDEN, departAt: 1505 },
      { station: stations.RAHWAY, departAt: 1509 },
      { station: stations.METROPARK, departAt: 1515 },
      { station: stations.METUCHEN, departAt: 1519 },
      { station: stations.EDISON, departAt: 1524 },
      { station: stations.NEW_BRUNSWICK, departAt: 1529 },
      { station: stations.JERSEY_AVENUE, departAt: 1538 }
    ]
  },
  {
    trainNumber: '3251',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1446 },
      { station: stations.SECAUCUS, departAt: 1456 },
      { station: stations.NEWARK_PENN, departAt: 1505 },
      { station: stations.NEWARK_AIRPORT, departAt: 1510 },
      { station: stations.RAHWAY, departAt: 1521 },
    ]
  },
  {
    trainNumber: '3937',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1459 },
      { station: stations.NEWARK_PENN, departAt: 1514 },
      { station: stations.NEW_BRUNSWICK, departAt: 1539 },
      { station: stations.JERSEY_AVENUE, departAt: 1543 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1556 },
      { station: stations.HAMILTON, departAt: 1603 },
      { station: stations.TRENTON, departAt: 1612 }
    ]
  },
  {
    trainNumber: '3853',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1507 },
      { station: stations.SECAUCUS, departAt: 1516 },
      { station: stations.NEWARK_PENN, departAt: 1526 },
      { station: stations.NEWARK_AIRPORT, departAt: 1532 },
      { station: stations.ELIZABETH, departAt: 1537 },
      { station: stations.LINDEN, departAt: 1542 },
      { station: stations.RAHWAY, departAt: 1546 },
      { station: stations.METROPARK, departAt: 1552 },
      { station: stations.METUCHEN, departAt: 1556 },
      { station: stations.EDISON, departAt: 1601 },
      { station: stations.NEW_BRUNSWICK, departAt: 1606 },
      { station: stations.JERSEY_AVENUE, departAt: 1610 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1623 },
      { station: stations.HAMILTON, departAt: 1630 },
      { station: stations.TRENTON, departAt: 1642 }
    ]
  },
  {
    trainNumber: '3509',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1520 },
      { station: stations.SECAUCUS, departAt: 1530 },
      { station: stations.NEWARK_PENN, departAt: 1539 },
      { station: stations.NEWARK_AIRPORT, departAt: 1545 },
      { station: stations.NORTH_ELIZABETH, departAt: 1548 },
      { station: stations.ELIZABETH, departAt: 1551 },
      { station: stations.LINDEN, departAt: 1556 },
      { station: stations.RAHWAY, departAt: 1600 }
    ]
  },
  {
    trainNumber: '3855',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1530 },
      { station: stations.SECAUCUS, departAt: 1540 },
      { station: stations.NEWARK_PENN, departAt: 1549 },
      { station: stations.NEWARK_AIRPORT, departAt: 1555 },
      { station: stations.RAHWAY, departAt: 1605 },
      { station: stations.METROPARK, departAt: 1610 },
      { station: stations.METUCHEN, departAt: 1614 },
      { station: stations.EDISON, departAt: 1619 },
      { station: stations.NEW_BRUNSWICK, departAt: 1623 },
      { station: stations.JERSEY_AVENUE, departAt: 1628 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1640 },
      { station: stations.HAMILTON, departAt: 1647 },
      { station: stations.TRENTON, departAt: 1700 }
    ]
  },
  {
    trainNumber: '3595',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1557 },
      { station: stations.NEWARK_PENN, departAt: 1614 },
      { station: stations.NEWARK_AIRPORT, departAt: 1621 },
      { station: stations.NORTH_ELIZABETH, departAt: 1624 },
      { station: stations.ELIZABETH, departAt: 1628 },
      { station: stations.LINDEN, departAt: 1633 },
      { station: stations.RAHWAY, departAt: 1637 }
    ]
  },
  {
    trainNumber: '3721',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1607 },
      { station: stations.SECAUCUS, departAt: 1617 },
      { station: stations.NEWARK_PENN, departAt: 1627 },
      { station: stations.NEWARK_AIRPORT, departAt: 1633 },
      { station: stations.METROPARK, departAt: 1647 },
      { station: stations.METUCHEN, departAt: 1652 },
      { station: stations.EDISON, departAt: 1657 },
      { station: stations.NEW_BRUNSWICK, departAt: 1702 },
      { station: stations.JERSEY_AVENUE, departAt: 1710 }
    ]
  },
  {
    trainNumber: '3943',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1613 },
      { station: stations.SECAUCUS, departAt: 1622 },
      { station: stations.NEWARK_PENN, departAt: 1632 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1709 },
      { station: stations.HAMILTON, departAt: 1718 },
      { station: stations.TRENTON, departAt: 1726 }
    ]
  },
  {
    trainNumber: '3723',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1628 },
      { station: stations.NEWARK_PENN, departAt: 1645 },
      { station: stations.METROPARK, departAt: 1702 },
      { station: stations.METUCHEN, departAt: 1707 },
      { station: stations.EDISON, departAt: 1712 },
      { station: stations.NEW_BRUNSWICK, departAt: 1717 },
      { station: stations.JERSEY_AVENUE, departAt: 1727 }
    ]
  },
  {
    trainNumber: '3861',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1630 },
      { station: stations.SECAUCUS, departAt: 1640 },
      { station: stations.NEWARK_PENN, departAt: 1649 },
      { station: stations.NEWARK_AIRPORT, departAt: 1655 },
      { station: stations.NORTH_ELIZABETH, departAt: 1659 },
      { station: stations.ELIZABETH, departAt: 1702 },
      { station: stations.LINDEN, departAt: 1707 },
      { station: stations.RAHWAY, departAt: 1711 },
      { station: stations.METROPARK, departAt: 1716 },
      { station: stations.METUCHEN, departAt: 1721 },
      { station: stations.EDISON, departAt: 1725 },
      { station: stations.NEW_BRUNSWICK, departAt: 1729 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1745 },
      { station: stations.HAMILTON, departAt: 1752 },
      { station: stations.TRENTON, departAt: 1804 }
    ]
  },
  {
    trainNumber: '3947',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1641 },
      { station: stations.SECAUCUS, departAt: 1651 },
      { station: stations.NEWARK_PENN, departAt: 1701 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1734 },
      { station: stations.HAMILTON, departAt: 1742 },
      { station: stations.TRENTON, departAt: 1753 }
    ]
  },
  {
    trainNumber: '3165',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1650 },
      { station: stations.SECAUCUS, departAt: 1659 },
      { station: stations.NEWARK_PENN, departAt: 1710 },
      { station: stations.METROPARK, departAt: 1728 },
      { station: stations.METUCHEN, departAt: 1733 },
      { station: stations.EDISON, departAt: 1738 },
      { station: stations.NEW_BRUNSWICK, departAt: 1743 },
      { station: stations.JERSEY_AVENUE, departAt: 1750 }
    ]
  },
  {
    trainNumber: '3511',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1701 },
      { station: stations.SECAUCUS, departAt: 1711 },
      { station: stations.NEWARK_PENN, departAt: 1721 },
      { station: stations.NEWARK_AIRPORT, departAt: 1727 },
      { station: stations.NORTH_ELIZABETH, departAt: 1730 },
      { station: stations.ELIZABETH, departAt: 1733 },
      { station: stations.LINDEN, departAt: 1739 },
      { station: stations.RAHWAY, departAt: 1743 }
    ]
  },
  {
    trainNumber: '3949',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1703 },
      { station: stations.NEWARK_PENN, departAt: 1719 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1755 },
      { station: stations.HAMILTON, departAt: 1803 },
      { station: stations.TRENTON, departAt: 1815 }
    ]
  },
  {
    trainNumber: '3725',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1708 },
      { station: stations.SECAUCUS, departAt: 1718 },
      { station: stations.NEWARK_PENN, departAt: 1729 },
      { station: stations.NEWARK_AIRPORT, departAt: 1735 },
      { station: stations.METROPARK, departAt: 1749 },
      { station: stations.METUCHEN, departAt: 1754 },
      { station: stations.EDISON, departAt: 1759 },
      { station: stations.NEW_BRUNSWICK, departAt: 1804 },
      { station: stations.JERSEY_AVENUE, departAt: 1813 }
    ]
  },
  {
    trainNumber: '3951',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1713 },
      { station: stations.SECAUCUS, departAt: 1723 },
      { station: stations.NEWARK_PENN, departAt: 1734 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1807 },
      { station: stations.HAMILTON, departAt: 1814 },
      { station: stations.TRENTON, departAt: 1827 }
    ]
  },
  {
    trainNumber: '3867',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1720 },
      { station: stations.SECAUCUS, departAt: 1730 },
      { station: stations.NEWARK_PENN, departAt: 1740 },
      { station: stations.METROPARK, departAt: 1758 },
      { station: stations.METUCHEN, departAt: 1803 },
      { station: stations.EDISON, departAt: 1808 },
      { station: stations.NEW_BRUNSWICK, departAt: 1813 },
      { station: stations.JERSEY_AVENUE, departAt: 1817 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1829 },
      { station: stations.HAMILTON, departAt: 1837 },
      { station: stations.TRENTON, departAt: 1849 }
    ]
  },
  {
    trainNumber: '3513',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1725 },
      { station: stations.SECAUCUS, departAt: 1735 },
      { station: stations.NEWARK_PENN, departAt: 1747 },
      { station: stations.NEWARK_AIRPORT, departAt: 1753 },
      { station: stations.NORTH_ELIZABETH, departAt: 1756 },
      { station: stations.ELIZABETH, departAt: 1759 },
      { station: stations.LINDEN, departAt: 1805 },
      { station: stations.RAHWAY, departAt: 1810 }
    ]
  },
  {
    trainNumber: '3953',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1729 },
      { station: stations.SECAUCUS, departAt: 1740 },
      { station: stations.NEWARK_PENN, departAt: 1750 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1822 },
      { station: stations.HAMILTON, departAt: 1831 },
      { station: stations.TRENTON, departAt: 1842 }
    ]
  },
  {
    trainNumber: '3727',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1737 },
      { station: stations.SECAUCUS, departAt: 1747 },
      { station: stations.NEWARK_PENN, departAt: 1756 },
      { station: stations.METROPARK, departAt: 1815 },
      { station: stations.METUCHEN, departAt: 1820 },
      { station: stations.EDISON, departAt: 1825 },
      { station: stations.NEW_BRUNSWICK, departAt: 1830 },
      { station: stations.JERSEY_AVENUE, departAt: 1837 }
    ]
  },
  {
    trainNumber: '3955',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1742 },
      { station: stations.SECAUCUS, departAt: 1752 },
      { station: stations.NEWARK_PENN, departAt: 1802 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1837 },
      { station: stations.HAMILTON, departAt: 1844 },
      { station: stations.TRENTON, departAt: 1856 }
    ]
  },
  {
    trainNumber: '3269',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1745 },
      { station: stations.SECAUCUS, departAt: 1755 },
      { station: stations.NEWARK_PENN, departAt: 1804 },
      { station: stations.RAHWAY, departAt: 1819 }
    ]
  },
  {
    trainNumber: '3871',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1751 },
      { station: stations.SECAUCUS, departAt: 1801 },
      { station: stations.NEWARK_PENN, departAt: 1811 },
      { station: stations.RAHWAY, departAt: 1825 },
      { station: stations.METROPARK, departAt: 1831 },
      { station: stations.METUCHEN, departAt: 1836 },
      { station: stations.EDISON, departAt: 1841 },
      { station: stations.NEW_BRUNSWICK, departAt: 1846 },
      { station: stations.JERSEY_AVENUE, departAt: 1850 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1904 },
      { station: stations.HAMILTON, departAt: 1911 },
      { station: stations.TRENTON, departAt: 1929 }
    ]
  },
  {
    trainNumber: '3271',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1755 },
      { station: stations.SECAUCUS, departAt: 1805 },
      { station: stations.NEWARK_PENN, departAt: 1816 },
      { station: stations.NEWARK_AIRPORT, departAt: 1823 },
      { station: stations.NORTH_ELIZABETH, departAt: 1828 },
      { station: stations.ELIZABETH, departAt: 1831 },
      { station: stations.LINDEN, departAt: 1837 },
      { station: stations.RAHWAY, departAt: 1841 }
    ]
  },
  {
    trainNumber: '3957',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1801 },
      { station: stations.NEWARK_PENN, departAt: 1818 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1852 },
      { station: stations.HAMILTON, departAt: 1900 },
      { station: stations.TRENTON, departAt: 1912 }
    ]
  },
  {
    trainNumber: '3959',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1812 },
      { station: stations.SECAUCUS, departAt: 1821 },
      { station: stations.NEWARK_PENN, departAt: 1832 },
      { station: stations.NEW_BRUNSWICK, departAt: 1856 },
      { station: stations.JERSEY_AVENUE, departAt: 1901 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1915 },
      { station: stations.HAMILTON, departAt: 1923 },
      { station: stations.TRENTON, departAt: 1935 }
    ]
  },
  {
    trainNumber: '3873',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1814 },
      { station: stations.NEWARK_PENN, departAt: 1830 },
      { station: stations.NEWARK_AIRPORT, departAt: 1836 },
      { station: stations.RAHWAY, departAt: 1846 },
      { station: stations.METROPARK, departAt: 1852 },
      { station: stations.METUCHEN, departAt: 1857 },
      { station: stations.EDISON, departAt: 1903 },
      { station: stations.NEW_BRUNSWICK, departAt: 1907 },
      { station: stations.JERSEY_AVENUE, departAt: 1912 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1924 },
      { station: stations.HAMILTON, departAt: 1931 },
      { station: stations.TRENTON, departAt: 1943 }
    ]
  },
  {
    trainNumber: '3515',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1816 },
      { station: stations.SECAUCUS, departAt: 1825 },
      { station: stations.NEWARK_PENN, departAt: 1837 },
      { station: stations.NEWARK_AIRPORT, departAt: 1843 },
      { station: stations.NORTH_ELIZABETH, departAt: 1846 },
      { station: stations.ELIZABETH, departAt: 1849 },
      { station: stations.LINDEN, departAt: 1856 },
      { station: stations.RAHWAY, departAt: 1901 }
    ]
  },
  {
    trainNumber: '3175',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1837 },
      { station: stations.SECAUCUS, departAt: 1846 },
      { station: stations.NEWARK_PENN, departAt: 1857 },
      { station: stations.NEWARK_AIRPORT, departAt: 1903 },
      { station: stations.METROPARK, departAt: 1917 },
      { station: stations.METUCHEN, departAt: 1922 },
      { station: stations.EDISON, departAt: 1927 },
      { station: stations.NEW_BRUNSWICK, departAt: 1932 },
      { station: stations.JERSEY_AVENUE, departAt: 1936 }
    ]
  },
  {
    trainNumber: '3961',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1839 },
      { station: stations.NEWARK_PENN, departAt: 1855 },
      { station: stations.NEW_BRUNSWICK, departAt: 1918 },
      { station: stations.JERSEY_AVENUE, departAt: 1923 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1936 },
      { station: stations.HAMILTON, departAt: 1944 },
      { station: stations.TRENTON, departAt: 1956 }
    ]
  },
  {
    trainNumber: '3875',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1847 },
      { station: stations.SECAUCUS, departAt: 1856 },
      { station: stations.NEWARK_PENN, departAt: 1905 },
      { station: stations.NEWARK_AIRPORT, departAt: 1911 },
      { station: stations.NORTH_ELIZABETH, departAt: 1914 },
      { station: stations.ELIZABETH, departAt: 1918 },
      { station: stations.LINDEN, departAt: 1923 },
      { station: stations.RAHWAY, departAt: 1927 },
      { station: stations.METROPARK, departAt: 1933 },
      { station: stations.METUCHEN, departAt: 1938 },
      { station: stations.EDISON, departAt: 1943 },
      { station: stations.NEW_BRUNSWICK, departAt: 1948 },
      { station: stations.JERSEY_AVENUE, departAt: 1953 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2006 },
      { station: stations.HAMILTON, departAt: 2013 },
      { station: stations.TRENTON, departAt: 2025 }
    ]
  },
  {
    trainNumber: '3279',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1905 },
      { station: stations.SECAUCUS, departAt: 1915 },
      { station: stations.NEWARK_PENN, departAt: 1924 },
      { station: stations.NEWARK_AIRPORT, departAt: 1930 },
      { station: stations.RAHWAY, departAt: 1940 }
    ]
  },
  {
    trainNumber: '3963',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1909 },
      { station: stations.SECAUCUS, departAt: 1919 },
      { station: stations.NEWARK_PENN, departAt: 1928 },
      { station: stations.NEWARK_AIRPORT, departAt: 1934 },
      { station: stations.NEW_BRUNSWICK, departAt: 1956 },
      { station: stations.JERSEY_AVENUE, departAt: 2001 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2014 },
      { station: stations.HAMILTON, departAt: 2021 },
      { station: stations.TRENTON, departAt: 2033 }
    ]
  },
  {
    trainNumber: '3733',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1920 },
      { station: stations.SECAUCUS, departAt: 1930 },
      { station: stations.NEWARK_PENN, departAt: 1940 },
      { station: stations.RAHWAY, departAt: 1953 },
      { station: stations.METROPARK, departAt: 2000 },
      { station: stations.METUCHEN, departAt: 2005 },
      { station: stations.EDISON, departAt: 2010 },
      { station: stations.NEW_BRUNSWICK, departAt: 2015 },
      { station: stations.JERSEY_AVENUE, departAt: 2025 }
    ]
  },
  {
    trainNumber: '3281',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1922 },
      { station: stations.NEWARK_PENN, departAt: 1937 },
      { station: stations.NEWARK_AIRPORT, departAt: 1943 },
      { station: stations.NORTH_ELIZABETH, departAt: 1947 },
      { station: stations.ELIZABETH, departAt: 1950 },
      { station: stations.LINDEN, departAt: 1955 },
      { station: stations.RAHWAY, departAt: 1959 }
    ]
  },
  {
    trainNumber: '3881',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1943 },
      { station: stations.SECAUCUS, departAt: 1952 },
      { station: stations.NEWARK_PENN, departAt: 2002 },
      { station: stations.NEWARK_AIRPORT, departAt: 2008 },
      { station: stations.NORTH_ELIZABETH, departAt: 2011 },
      { station: stations.ELIZABETH, departAt: 2014 },
      { station: stations.LINDEN, departAt: 2020 },
      { station: stations.RAHWAY, departAt: 2024 },
      { station: stations.METROPARK, departAt: 2029 },
      { station: stations.METUCHEN, departAt: 2034 },
      { station: stations.EDISON, departAt: 2038 },
      { station: stations.NEW_BRUNSWICK, departAt: 2042 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2058 },
      { station: stations.HAMILTON, departAt: 2104 },
      { station: stations.TRENTON, departAt: 2116 }
    ]
  },
  {
    trainNumber: '3965',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 1949 },
      { station: stations.NEWARK_PENN, departAt: 2005 },
      { station: stations.NEW_BRUNSWICK, departAt: 2029 },
      { station: stations.JERSEY_AVENUE, departAt: 2034 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2048 },
      { station: stations.HAMILTON, departAt: 2055 },
      { station: stations.TRENTON, departAt: 2107 }
    ]
  },
  {
    trainNumber: '3883',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2007 },
      { station: stations.SECAUCUS, departAt: 2017 },
      { station: stations.NEWARK_PENN, departAt: 2026 },
      { station: stations.NEWARK_AIRPORT, departAt: 2032 },
      { station: stations.NORTH_ELIZABETH, departAt: 2035 },
      { station: stations.ELIZABETH, departAt: 2038 },
      { station: stations.LINDEN, departAt: 2044 },
      { station: stations.RAHWAY, departAt: 2048 },
      { station: stations.METROPARK, departAt: 2056 },
      { station: stations.METUCHEN, departAt: 2101 },
      { station: stations.EDISON, departAt: 2106 },
      { station: stations.NEW_BRUNSWICK, departAt: 2110 },
      { station: stations.JERSEY_AVENUE, departAt: 2115 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2127 },
      { station: stations.HAMILTON, departAt: 2134 },
      { station: stations.TRENTON, departAt: 2146 }
    ]
  },
  {
    trainNumber: '3969',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2016 },
      { station: stations.SECAUCUS, departAt: 2025 },
      { station: stations.NEWARK_PENN, departAt: 2035 },
      { station: stations.NEWARK_AIRPORT, departAt: 2041 },
      { station: stations.NEW_BRUNSWICK, departAt: 2102 },
      { station: stations.JERSEY_AVENUE, departAt: 2107 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2120 },
      { station: stations.HAMILTON, departAt: 2127 },
      { station: stations.TRENTON, departAt: 2139 }
    ]
  },
  {
    trainNumber: '3283',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2022 },
      { station: stations.SECAUCUS, departAt: 2031 },
      { station: stations.NEWARK_PENN, departAt: 2041 },
      { station: stations.NEWARK_AIRPORT, departAt: 2046 },
      { station: stations.RAHWAY, departAt: 2056 }
    ]
  },
  {
    trainNumber: '3885',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2037 },
      { station: stations.SECAUCUS, departAt: 2047 },
      { station: stations.NEWARK_PENN, departAt: 2056 },
      { station: stations.NEWARK_AIRPORT, departAt: 2101 },
      { station: stations.METROPARK, departAt: 2115 },
      { station: stations.METUCHEN, departAt: 2120 },
      { station: stations.EDISON, departAt: 2125 },
      { station: stations.NEW_BRUNSWICK, departAt: 2130 },
      { station: stations.JERSEY_AVENUE, departAt: 2134 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2147 },
      { station: stations.HAMILTON, departAt: 2155 },
      { station: stations.TRENTON, departAt: 2207 }
    ]
  },
  {
    trainNumber: '3285',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2041 },
      { station: stations.SECAUCUS, departAt: 2051 },
      { station: stations.NEWARK_PENN, departAt: 2100 },
      { station: stations.NEWARK_AIRPORT, departAt: 2106 },
      { station: stations.NORTH_ELIZABETH, departAt: 2109 },
      { station: stations.ELIZABETH, departAt: 2112 },
      { station: stations.LINDEN, departAt: 2117 },
      { station: stations.RAHWAY, departAt: 2121 }
    ]
  },
  {
    trainNumber: '3887',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2106 },
      { station: stations.SECAUCUS, departAt: 2115 },
      { station: stations.NEWARK_PENN, departAt: 2124 },
      { station: stations.NEWARK_AIRPORT, departAt: 2130 },
      { station: stations.RAHWAY, departAt: 2140 },
      { station: stations.METROPARK, departAt: 2147 },
      { station: stations.METUCHEN, departAt: 2151 },
      { station: stations.EDISON, departAt: 2156 },
      { station: stations.NEW_BRUNSWICK, departAt: 2200 },
      { station: stations.JERSEY_AVENUE, departAt: 2205 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2217 },
      { station: stations.HAMILTON, departAt: 2224 },
      { station: stations.TRENTON, departAt: 2234 }
    ]
  },
  {
    trainNumber: '3889',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2135 },
      { station: stations.SECAUCUS, departAt: 2144 },
      { station: stations.NEWARK_PENN, departAt: 2155 },
      { station: stations.NEWARK_AIRPORT, departAt: 2200 },
      { station: stations.RAHWAY, departAt: 2210 },
      { station: stations.METROPARK, departAt: 2216 },
      { station: stations.METUCHEN, departAt: 2220 },
      { station: stations.EDISON, departAt: 2225 },
      { station: stations.NEW_BRUNSWICK, departAt: 2230 },
      { station: stations.JERSEY_AVENUE, departAt: 2234 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2247 },
      { station: stations.HAMILTON, departAt: 2254 },
      { station: stations.TRENTON, departAt: 2306 }
    ]
  },
  {
    trainNumber: '3289',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2138 },
      { station: stations.SECAUCUS, departAt: 2148 },
      { station: stations.NEWARK_PENN, departAt: 2159 },
      { station: stations.NEWARK_AIRPORT, departAt: 2204 },
      { station: stations.NORTH_ELIZABETH, departAt: 2207 },
      { station: stations.ELIZABETH, departAt: 2210 },
      { station: stations.LINDEN, departAt: 2216 },
      { station: stations.RAHWAY, departAt: 2219 }
    ]
  },
  {
    trainNumber: '3737',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2154 },
      { station: stations.SECAUCUS, departAt: 2204 },
      { station: stations.NEWARK_PENN, departAt: 2213 },
      { station: stations.NEWARK_AIRPORT, departAt: 2219 },
      { station: stations.NORTH_ELIZABETH, departAt: 2222 },
      { station: stations.ELIZABETH, departAt: 2226 },
      { station: stations.LINDEN, departAt: 2231 },
      { station: stations.RAHWAY, departAt: 2235 },
      { station: stations.METROPARK, departAt: 2243 },
      { station: stations.METUCHEN, departAt: 2247 },
      { station: stations.EDISON, departAt: 2252 },
      { station: stations.NEW_BRUNSWICK, departAt: 2257 },
      { station: stations.JERSEY_AVENUE, departAt: 2306 }
    ]
  },
  {
    trainNumber: '3891',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2211 },
      { station: stations.SECAUCUS, departAt: 2220 },
      { station: stations.NEWARK_PENN, departAt: 2230 },
      { station: stations.NEWARK_AIRPORT, departAt: 2236 },
      { station: stations.RAHWAY, departAt: 2246 },
      { station: stations.METROPARK, departAt: 2252 },
      { station: stations.METUCHEN, departAt: 2256 },
      { station: stations.EDISON, departAt: 2301 },
      { station: stations.NEW_BRUNSWICK, departAt: 2305 },
      { station: stations.JERSEY_AVENUE, departAt: 2310 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2323 },
      { station: stations.HAMILTON, departAt: 2330 },
      { station: stations.TRENTON, departAt: 2342 }
    ]
  },
  {
    trainNumber: '3293',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2220 },
      { station: stations.SECAUCUS, departAt: 2230 },
      { station: stations.NEWARK_PENN, departAt: 2240 },
      { station: stations.NEWARK_AIRPORT, departAt: 2245 },
      { station: stations.NORTH_ELIZABETH, departAt: 2248 },
      { station: stations.ELIZABETH, departAt: 2251 },
      { station: stations.LINDEN, departAt: 2257 },
      { station: stations.RAHWAY, departAt: 2300 }
    ]
  },
  {
    trainNumber: '3893',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2238 },
      { station: stations.SECAUCUS, departAt: 2247 },
      { station: stations.NEWARK_PENN, departAt: 2256 },
      { station: stations.NEWARK_AIRPORT, departAt: 2302 },
      { station: stations.RAHWAY, departAt: 2312 },
      { station: stations.METROPARK, departAt: 2317 },
      { station: stations.METUCHEN, departAt: 2322 },
      { station: stations.EDISON, departAt: 2327 },
      { station: stations.NEW_BRUNSWICK, departAt: 2331 },
      { station: stations.JERSEY_AVENUE, departAt: 2336 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2349 },
      { station: stations.HAMILTON, departAt: 2356 },
      { station: stations.TRENTON, departAt: 2407 }
    ]
  },
  {
    trainNumber: '3895',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2306 },
      { station: stations.SECAUCUS, departAt: 2316 },
      { station: stations.NEWARK_PENN, departAt: 2324 },
      { station: stations.NEWARK_AIRPORT, departAt: 2330 },
      { station: stations.NORTH_ELIZABETH, departAt: 2333 },
      { station: stations.ELIZABETH, departAt: 2336 },
      { station: stations.LINDEN, departAt: 2342 },
      { station: stations.RAHWAY, departAt: 2346 },
      { station: stations.METROPARK, departAt: 2352 },
      { station: stations.METUCHEN, departAt: 2357 },
      { station: stations.EDISON, departAt: 2402 },
      { station: stations.NEW_BRUNSWICK, departAt: 2407 },
      { station: stations.JERSEY_AVENUE, departAt: 2413 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2426 },
      { station: stations.HAMILTON, departAt: 2433 },
      { station: stations.TRENTON, departAt: 2446 }
    ]
  },
  {
    trainNumber: '3297',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2318 },
      { station: stations.SECAUCUS, departAt: 2328 },
      { station: stations.NEWARK_PENN, departAt: 2336 },
      { station: stations.NEWARK_AIRPORT, departAt: 2342 },
      { station: stations.NORTH_ELIZABETH, departAt: 2345 },
      { station: stations.ELIZABETH, departAt: 2348 },
      { station: stations.LINDEN, departAt: 2353 },
      { station: stations.RAHWAY, departAt: 2357 }
    ]
  },
  {
    trainNumber: '3201',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2405 },
      { station: stations.SECAUCUS, departAt: 2414 },
      { station: stations.NEWARK_PENN, departAt: 2422 },
      { station: stations.NEWARK_AIRPORT, departAt: 2427 },
      { station: stations.NORTH_ELIZABETH, departAt: 2431 },
      { station: stations.ELIZABETH, departAt: 2434 },
      { station: stations.LINDEN, departAt: 2439 },
      { station: stations.RAHWAY, departAt: 2443 }
    ]
  },
  {
    trainNumber: '3897',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2414 },
      { station: stations.SECAUCUS, departAt: 2423 },
      { station: stations.NEWARK_PENN, departAt: 2432 },
      { station: stations.NEWARK_AIRPORT, departAt: 2437 },
      { station: stations.ELIZABETH, departAt: 2442 },
      { station: stations.LINDEN, departAt: 2448 },
      { station: stations.RAHWAY, departAt: 2452 },
      { station: stations.METROPARK, departAt: 2457 },
      { station: stations.METUCHEN, departAt: 2502 },
      { station: stations.EDISON, departAt: 2507 },
      { station: stations.NEW_BRUNSWICK, departAt: 2511 },
      { station: stations.JERSEY_AVENUE, departAt: 2516 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2529 },
      { station: stations.HAMILTON, departAt: 2536 },
      { station: stations.TRENTON, departAt: 2552 }
    ]
  },
  {
    trainNumber: '3205',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2500 },
      { station: stations.SECAUCUS, departAt: 2509 },
      { station: stations.NEWARK_PENN, departAt: 2517 },
      { station: stations.NEWARK_AIRPORT, departAt: 2522 },
      { station: stations.ELIZABETH, departAt: 2527 },
      { station: stations.LINDEN, departAt: 2532 },
      { station: stations.RAHWAY, departAt: 2536 }
    ]
  },
  {
    trainNumber: '3805',
    isWeekend: false,
    routes: [
      { station: stations.NEW_YORK, departAt: 2522 },
      { station: stations.SECAUCUS, departAt: 2531 },
      { station: stations.NEWARK_PENN, departAt: 2540 },
      { station: stations.NEWARK_AIRPORT, departAt: 2545 },
      { station: stations.NORTH_ELIZABETH, departAt: 2549 },
      { station: stations.ELIZABETH, departAt: 2552 },
      { station: stations.LINDEN, departAt: 2558 },
      { station: stations.RAHWAY, departAt: 2602 },
      { station: stations.METROPARK, departAt: 2608 },
      { station: stations.METUCHEN, departAt: 2613 },
      { station: stations.EDISON, departAt: 2618 },
      { station: stations.NEW_BRUNSWICK, departAt: 2623 },
      { station: stations.JERSEY_AVENUE, departAt: 2628 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2642 },
      { station: stations.HAMILTON, departAt: 2649 },
      { station: stations.TRENTON, departAt: 2706 }
    ]
  },
  {
    trainNumber: '7813',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 510 },
      { station: stations.SECAUCUS, departAt: 519 },
      { station: stations.NEWARK_PENN, departAt: 528 },
      { station: stations.NEWARK_AIRPORT, departAt: 533 },
      { station: stations.ELIZABETH, departAt: 538 },
      { station: stations.LINDEN, departAt: 544 },
      { station: stations.RAHWAY, departAt: 548 },
      { station: stations.METROPARK, departAt: 553 },
      { station: stations.METUCHEN, departAt: 558 },
      { station: stations.EDISON, departAt: 603 },
      { station: stations.NEW_BRUNSWICK, departAt: 607 },
      { station: stations.PRINCETON_JUNCTION, departAt: 622 },
      { station: stations.HAMILTON, departAt: 629 },
      { station: stations.TRENTON, departAt: 641 }
    ]
  },
  {
    trainNumber: '7217',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 607 },
      { station: stations.SECAUCUS, departAt: 616 },
      { station: stations.NEWARK_PENN, departAt: 625 },
      { station: stations.NEWARK_AIRPORT, departAt: 630 },
      { station: stations.NORTH_ELIZABETH, departAt: 634 },
      { station: stations.ELIZABETH, departAt: 637 },
      { station: stations.LINDEN, departAt: 642 },
      { station: stations.RAHWAY, departAt: 646 }
    ]
  },
  {
    trainNumber: '7817',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 613 },
      { station: stations.SECAUCUS, departAt: 622 },
      { station: stations.NEWARK_PENN, departAt: 632 },
      { station: stations.NEWARK_AIRPORT, departAt: 638 },
      { station: stations.ELIZABETH, departAt: 643 },
      { station: stations.LINDEN, departAt: 648 },
      { station: stations.RAHWAY, departAt: 652 },
      { station: stations.METROPARK, departAt: 658 },
      { station: stations.METUCHEN, departAt: 702 },
      { station: stations.EDISON, departAt: 707 },
      { station: stations.NEW_BRUNSWICK, departAt: 712 },
      { station: stations.PRINCETON_JUNCTION, departAt: 727 },
      { station: stations.HAMILTON, departAt: 734 },
      { station: stations.TRENTON, departAt: 746 }
    ]
  },
  {
    trainNumber: '7221',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 707 },
      { station: stations.SECAUCUS, departAt: 716 },
      { station: stations.NEWARK_PENN, departAt: 725 },
      { station: stations.NEWARK_AIRPORT, departAt: 730 },
      { station: stations.ELIZABETH, departAt: 735 },
      { station: stations.LINDEN, departAt: 740 },
      { station: stations.RAHWAY, departAt: 744 }
    ]
  },
  {
    trainNumber: '7821',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 714 },
      { station: stations.SECAUCUS, departAt: 723 },
      { station: stations.NEWARK_PENN, departAt: 732 },
      { station: stations.NEWARK_AIRPORT, departAt: 737 },
      { station: stations.ELIZABETH, departAt: 742 },
      { station: stations.LINDEN, departAt: 748 },
      { station: stations.RAHWAY, departAt: 752 },
      { station: stations.METROPARK, departAt: 757 },
      { station: stations.METUCHEN, departAt: 802 },
      { station: stations.EDISON, departAt: 807 },
      { station: stations.NEW_BRUNSWICK, departAt: 811 },
      { station: stations.PRINCETON_JUNCTION, departAt: 826 },
      { station: stations.HAMILTON, departAt: 833 },
      { station: stations.TRENTON, departAt: 845 }
    ]
  },
  {
    trainNumber: '7225',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 807 },
      { station: stations.SECAUCUS, departAt: 816 },
      { station: stations.NEWARK_PENN, departAt: 825 },
      { station: stations.NEWARK_AIRPORT, departAt: 830 },
      { station: stations.NORTH_ELIZABETH, departAt: 834 },
      { station: stations.ELIZABETH, departAt: 837 },
      { station: stations.LINDEN, departAt: 842 },
      { station: stations.RAHWAY, departAt: 846 }
    ]
  },
  {
    trainNumber: '7825',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 814 },
      { station: stations.SECAUCUS, departAt: 823 },
      { station: stations.NEWARK_PENN, departAt: 832 },
      { station: stations.NEWARK_AIRPORT, departAt: 837 },
      { station: stations.ELIZABETH, departAt: 842 },
      { station: stations.LINDEN, departAt: 848 },
      { station: stations.RAHWAY, departAt: 852 },
      { station: stations.METROPARK, departAt: 857 },
      { station: stations.METUCHEN, departAt: 902 },
      { station: stations.EDISON, departAt: 907 },
      { station: stations.NEW_BRUNSWICK, departAt: 911 },
      { station: stations.PRINCETON_JUNCTION, departAt: 926 },
      { station: stations.HAMILTON, departAt: 933 },
      { station: stations.TRENTON, departAt: 946 }
    ]
  },
  {
    trainNumber: '7229',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 907 },
      { station: stations.SECAUCUS, departAt: 916 },
      { station: stations.NEWARK_PENN, departAt: 925 },
      { station: stations.NEWARK_AIRPORT, departAt: 930 },
      { station: stations.ELIZABETH, departAt: 935 },
      { station: stations.LINDEN, departAt: 940 },
      { station: stations.RAHWAY, departAt: 944 }
    ]
  },
  {
    trainNumber: '7829',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 914 },
      { station: stations.SECAUCUS, departAt: 923 },
      { station: stations.NEWARK_PENN, departAt: 932 },
      { station: stations.NEWARK_AIRPORT, departAt: 937 },
      { station: stations.ELIZABETH, departAt: 942 },
      { station: stations.LINDEN, departAt: 948 },
      { station: stations.RAHWAY, departAt: 952 },
      { station: stations.METROPARK, departAt: 957 },
      { station: stations.METUCHEN, departAt: 1002 },
      { station: stations.EDISON, departAt: 1007 },
      { station: stations.NEW_BRUNSWICK, departAt: 1011 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1026 },
      { station: stations.HAMILTON, departAt: 1033 },
      { station: stations.TRENTON, departAt: 1045 }
    ]
  },
  {
    trainNumber: '7233',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1007 },
      { station: stations.SECAUCUS, departAt: 1016 },
      { station: stations.NEWARK_PENN, departAt: 1025 },
      { station: stations.NEWARK_AIRPORT, departAt: 1030 },
      { station: stations.NORTH_ELIZABETH, departAt: 1034 },
      { station: stations.ELIZABETH, departAt: 1037 },
      { station: stations.LINDEN, departAt: 1042 },
      { station: stations.RAHWAY, departAt: 1046 }
    ]
  },
  {
    trainNumber: '7833',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1014 },
      { station: stations.SECAUCUS, departAt: 1023 },
      { station: stations.NEWARK_PENN, departAt: 1032 },
      { station: stations.NEWARK_AIRPORT, departAt: 1037 },
      { station: stations.ELIZABETH, departAt: 1042 },
      { station: stations.LINDEN, departAt: 1048 },
      { station: stations.RAHWAY, departAt: 1052 },
      { station: stations.METROPARK, departAt: 1057 },
      { station: stations.METUCHEN, departAt: 1102 },
      { station: stations.EDISON, departAt: 1107 },
      { station: stations.NEW_BRUNSWICK, departAt: 1111 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1126 },
      { station: stations.HAMILTON, departAt: 1133 },
      { station: stations.TRENTON, departAt: 1146 }
    ]
  },
  {
    trainNumber: '7237',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1107 },
      { station: stations.SECAUCUS, departAt: 1116 },
      { station: stations.NEWARK_PENN, departAt: 1125 },
      { station: stations.NEWARK_AIRPORT, departAt: 1130 },
      { station: stations.ELIZABETH, departAt: 1135 },
      { station: stations.LINDEN, departAt: 1140 },
      { station: stations.RAHWAY, departAt: 1144 }
    ]
  },
  {
    trainNumber: '7837',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1114 },
      { station: stations.SECAUCUS, departAt: 1123 },
      { station: stations.NEWARK_PENN, departAt: 1132 },
      { station: stations.NEWARK_AIRPORT, departAt: 1137 },
      { station: stations.ELIZABETH, departAt: 1142 },
      { station: stations.LINDEN, departAt: 1148 },
      { station: stations.RAHWAY, departAt: 1152 },
      { station: stations.METROPARK, departAt: 1157 },
      { station: stations.METUCHEN, departAt: 1202 },
      { station: stations.EDISON, departAt: 1207 },
      { station: stations.NEW_BRUNSWICK, departAt: 1211 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1226 },
      { station: stations.HAMILTON, departAt: 1233 },
      { station: stations.TRENTON, departAt: 1246 }
    ]
  },
  {
    trainNumber: '7241',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1207 },
      { station: stations.SECAUCUS, departAt: 1216 },
      { station: stations.NEWARK_PENN, departAt: 1225 },
      { station: stations.NEWARK_AIRPORT, departAt: 1230 },
      { station: stations.NORTH_ELIZABETH, departAt: 1234 },
      { station: stations.ELIZABETH, departAt: 1237 },
      { station: stations.LINDEN, departAt: 1242 },
      { station: stations.RAHWAY, departAt: 1246 }
    ]
  },
  {
    trainNumber: '7841',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1214 },
      { station: stations.SECAUCUS, departAt: 1223 },
      { station: stations.NEWARK_PENN, departAt: 1232 },
      { station: stations.NEWARK_AIRPORT, departAt: 1237 },
      { station: stations.ELIZABETH, departAt: 1242 },
      { station: stations.LINDEN, departAt: 1248 },
      { station: stations.RAHWAY, departAt: 1252 },
      { station: stations.METROPARK, departAt: 1257 },
      { station: stations.METUCHEN, departAt: 1302 },
      { station: stations.EDISON, departAt: 1307 },
      { station: stations.NEW_BRUNSWICK, departAt: 1311 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1326 },
      { station: stations.HAMILTON, departAt: 1333 },
      { station: stations.TRENTON, departAt: 1345 }
    ]
  },
  {
    trainNumber: '7245',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1307 },
      { station: stations.SECAUCUS, departAt: 1316 },
      { station: stations.NEWARK_PENN, departAt: 1325 },
      { station: stations.NEWARK_AIRPORT, departAt: 1330 },
      { station: stations.NORTH_ELIZABETH, departAt: 1334 },
      { station: stations.ELIZABETH, departAt: 1337 },
      { station: stations.LINDEN, departAt: 1342 },
      { station: stations.RAHWAY, departAt: 1346 }
    ]
  },
  {
    trainNumber: '7845',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1314 },
      { station: stations.SECAUCUS, departAt: 1323 },
      { station: stations.NEWARK_PENN, departAt: 1332 },
      { station: stations.NEWARK_AIRPORT, departAt: 1337 },
      { station: stations.ELIZABETH, departAt: 1342 },
      { station: stations.LINDEN, departAt: 1348 },
      { station: stations.RAHWAY, departAt: 1352 },
      { station: stations.METROPARK, departAt: 1357 },
      { station: stations.METUCHEN, departAt: 1402 },
      { station: stations.EDISON, departAt: 1407 },
      { station: stations.NEW_BRUNSWICK, departAt: 1411 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1426 },
      { station: stations.HAMILTON, departAt: 1433 },
      { station: stations.TRENTON, departAt: 1445 }
    ]
  },
  {
    trainNumber: '7847',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1355 },
      { station: stations.SECAUCUS, departAt: 1406 },
      { station: stations.NEWARK_PENN, departAt: 1416 },
      { station: stations.NEWARK_AIRPORT, departAt: 1421 },
      { station: stations.METROPARK, departAt: 1434 },
      { station: stations.METUCHEN, departAt: 1439 },
      { station: stations.EDISON, departAt: 1444 },
      { station: stations.NEW_BRUNSWICK, departAt: 1448 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1515 },
      { station: stations.HAMILTON, departAt: 1522 },
      { station: stations.TRENTON, departAt: 1531 }
    ]
  },
  {
    trainNumber: '7249',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1407 },
      { station: stations.SECAUCUS, departAt: 1416 },
      { station: stations.NEWARK_PENN, departAt: 1425 },
      { station: stations.NEWARK_AIRPORT, departAt: 1430 },
      { station: stations.NORTH_ELIZABETH, departAt: 1434 },
      { station: stations.ELIZABETH, departAt: 1437 },
      { station: stations.LINDEN, departAt: 1442 },
      { station: stations.RAHWAY, departAt: 1446 }
    ]
  },
  {
    trainNumber: '7849',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1414 },
      { station: stations.SECAUCUS, departAt: 1423 },
      { station: stations.NEWARK_PENN, departAt: 1432 },
      { station: stations.NEWARK_AIRPORT, departAt: 1437 },
      { station: stations.ELIZABETH, departAt: 1442 },
      { station: stations.LINDEN, departAt: 1448 },
      { station: stations.RAHWAY, departAt: 1452 },
      { station: stations.METROPARK, departAt: 1457 },
      { station: stations.METUCHEN, departAt: 1502 },
      { station: stations.EDISON, departAt: 1507 },
      { station: stations.NEW_BRUNSWICK, departAt: 1511 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1526 },
      { station: stations.HAMILTON, departAt: 1533 },
      { station: stations.TRENTON, departAt: 1546 }
    ]
  },
  {
    trainNumber: '7851',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1455 },
      { station: stations.SECAUCUS, departAt: 1506 },
      { station: stations.NEWARK_PENN, departAt: 1516 },
      { station: stations.NEWARK_AIRPORT, departAt: 1521 },
      { station: stations.METROPARK, departAt: 1535 },
      { station: stations.METUCHEN, departAt: 1539 },
      { station: stations.EDISON, departAt: 1544 },
      { station: stations.NEW_BRUNSWICK, departAt: 1549 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1614 },
      { station: stations.HAMILTON, departAt: 1621 },
      { station: stations.TRENTON, departAt: 1631 }
    ]
  },
  {
    trainNumber: '7253',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1507 },
      { station: stations.SECAUCUS, departAt: 1516 },
      { station: stations.NEWARK_PENN, departAt: 1525 },
      { station: stations.NEWARK_AIRPORT, departAt: 1530 },
      { station: stations.NORTH_ELIZABETH, departAt: 1534 },
      { station: stations.ELIZABETH, departAt: 1537 },
      { station: stations.LINDEN, departAt: 1542 },
      { station: stations.RAHWAY, departAt: 1546 }
    ]
  },
  {
    trainNumber: '7853',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1515 },
      { station: stations.SECAUCUS, departAt: 1524 },
      { station: stations.NEWARK_PENN, departAt: 1533 },
      { station: stations.NEWARK_AIRPORT, departAt: 1538 },
      { station: stations.ELIZABETH, departAt: 1543 },
      { station: stations.LINDEN, departAt: 1549 },
      { station: stations.RAHWAY, departAt: 1553 },
      { station: stations.METROPARK, departAt: 1558 },
      { station: stations.METUCHEN, departAt: 1603 },
      { station: stations.EDISON, departAt: 1608 },
      { station: stations.NEW_BRUNSWICK, departAt: 1612 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1627 },
      { station: stations.HAMILTON, departAt: 1634 },
      { station: stations.TRENTON, departAt: 1646 }
    ]
  },
  {
    trainNumber: '7855',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1552 },
      { station: stations.SECAUCUS, departAt: 1602 },
      { station: stations.NEWARK_PENN, departAt: 1612 },
      { station: stations.NEWARK_AIRPORT, departAt: 1617 },
      { station: stations.METROPARK, departAt: 1631 },
      { station: stations.METUCHEN, departAt: 1636 },
      { station: stations.EDISON, departAt: 1641 },
      { station: stations.NEW_BRUNSWICK, departAt: 1645 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1703 },
      { station: stations.HAMILTON, departAt: 1710 },
      { station: stations.TRENTON, departAt: 1722 }
    ]
  },
  {
    trainNumber: '7657',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1556 },
      { station: stations.SECAUCUS, departAt: 1606 },
      { station: stations.NEWARK_PENN, departAt: 1616 },
      { station: stations.NEWARK_AIRPORT, departAt: 1621 },
      { station: stations.NORTH_ELIZABETH, departAt: 1625 },
      { station: stations.ELIZABETH, departAt: 1628 },
      { station: stations.LINDEN, departAt: 1633 },
      { station: stations.RAHWAY, departAt: 1639 }
    ]
  },
  {
    trainNumber: '7257',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1607 },
      { station: stations.SECAUCUS, departAt: 1616 },
      { station: stations.NEWARK_PENN, departAt: 1625 },
      { station: stations.NEWARK_AIRPORT, departAt: 1630 },
      { station: stations.ELIZABETH, departAt: 1635 },
      { station: stations.LINDEN, departAt: 1640 },
      { station: stations.RAHWAY, departAt: 1644 }
    ]
  },
  {
    trainNumber: '7857',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1614 },
      { station: stations.SECAUCUS, departAt: 1624 },
      { station: stations.NEWARK_PENN, departAt: 1634 },
      { station: stations.NEWARK_AIRPORT, departAt: 1641 },
      { station: stations.NORTH_ELIZABETH, departAt: 1645 },
      { station: stations.ELIZABETH, departAt: 1648 },
      { station: stations.LINDEN, departAt: 1653 },
      { station: stations.RAHWAY, departAt: 1657 },
      { station: stations.METROPARK, departAt: 1703 },
      { station: stations.METUCHEN, departAt: 1708 },
      { station: stations.EDISON, departAt: 1713 },
      { station: stations.NEW_BRUNSWICK, departAt: 1717 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1632 },
      { station: stations.HAMILTON, departAt: 1739 },
      { station: stations.TRENTON, departAt: 1749 }
    ]
  },
  {
    trainNumber: '7859',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1654 },
      { station: stations.SECAUCUS, departAt: 1703 },
      { station: stations.NEWARK_PENN, departAt: 1712 },
      { station: stations.NEWARK_AIRPORT, departAt: 1717 },
      { station: stations.METROPARK, departAt: 1732 },
      { station: stations.METUCHEN, departAt: 1737 },
      { station: stations.EDISON, departAt: 1742 },
      { station: stations.NEW_BRUNSWICK, departAt: 1746 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1806 },
      { station: stations.HAMILTON, departAt: 1813 },
      { station: stations.TRENTON, departAt: 1825 }
    ]
  },
  {
    trainNumber: '7261',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1707 },
      { station: stations.SECAUCUS, departAt: 1716 },
      { station: stations.NEWARK_PENN, departAt: 1725 },
      { station: stations.NEWARK_AIRPORT, departAt: 1730 },
      { station: stations.ELIZABETH, departAt: 1735 },
      { station: stations.LINDEN, departAt: 1740 },
      { station: stations.RAHWAY, departAt: 1744 }
    ]
  },
  {
    trainNumber: '7861',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1714 },
      { station: stations.SECAUCUS, departAt: 1723 },
      { station: stations.NEWARK_PENN, departAt: 1732 },
      { station: stations.NEWARK_AIRPORT, departAt: 1737 },
      { station: stations.NORTH_ELIZABETH, departAt: 1741 },
      { station: stations.ELIZABETH, departAt: 1744 },
      { station: stations.LINDEN, departAt: 1750 },
      { station: stations.RAHWAY, departAt: 1754 },
      { station: stations.METROPARK, departAt: 1759 },
      { station: stations.METUCHEN, departAt: 1804 },
      { station: stations.EDISON, departAt: 1809 },
      { station: stations.NEW_BRUNSWICK, departAt: 1813 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1828 },
      { station: stations.HAMILTON, departAt: 1835 },
      { station: stations.TRENTON, departAt: 1847 }
    ]
  },
  {
    trainNumber: '7863',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1753 },
      { station: stations.SECAUCUS, departAt: 1803 },
      { station: stations.NEWARK_PENN, departAt: 1812 },
      { station: stations.NEWARK_AIRPORT, departAt: 1817 },
      { station: stations.METROPARK, departAt: 1831 },
      { station: stations.METUCHEN, departAt: 1836 },
      { station: stations.EDISON, departAt: 1841 },
      { station: stations.NEW_BRUNSWICK, departAt: 1845 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1901 },
      { station: stations.HAMILTON, departAt: 1908 },
      { station: stations.TRENTON, departAt: 1920 }
    ]
  },
  {
    trainNumber: '7665',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1756 },
      { station: stations.SECAUCUS, departAt: 1805 },
      { station: stations.NEWARK_PENN, departAt: 1816 },
      { station: stations.NEWARK_AIRPORT, departAt: 1821 },
      { station: stations.NORTH_ELIZABETH, departAt: 1825 },
      { station: stations.ELIZABETH, departAt: 1828 },
      { station: stations.LINDEN, departAt: 1833 },
      { station: stations.RAHWAY, departAt: 1839 }
    ]
  },
  {
    trainNumber: '7265',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1807 },
      { station: stations.SECAUCUS, departAt: 1816 },
      { station: stations.NEWARK_PENN, departAt: 1825 },
      { station: stations.NEWARK_AIRPORT, departAt: 1830 },
      { station: stations.ELIZABETH, departAt: 1835 },
      { station: stations.LINDEN, departAt: 1840 },
      { station: stations.RAHWAY, departAt: 1844 }
    ]
  },
  {
    trainNumber: '7865',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1814 },
      { station: stations.SECAUCUS, departAt: 1823 },
      { station: stations.NEWARK_PENN, departAt: 1832 },
      { station: stations.NEWARK_AIRPORT, departAt: 1837 },
      { station: stations.ELIZABETH, departAt: 1842 },
      { station: stations.LINDEN, departAt: 1848 },
      { station: stations.RAHWAY, departAt: 1852 },
      { station: stations.METROPARK, departAt: 1857 },
      { station: stations.METUCHEN, departAt: 1902 },
      { station: stations.EDISON, departAt: 1907 },
      { station: stations.NEW_BRUNSWICK, departAt: 1911 },
      { station: stations.PRINCETON_JUNCTION, departAt: 1926 },
      { station: stations.HAMILTON, departAt: 1933 },
      { station: stations.TRENTON, departAt: 1945 }
    ]
  },
  {
    trainNumber: '7669',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1852 },
      { station: stations.SECAUCUS, departAt: 1901 },
      { station: stations.NEWARK_PENN, departAt: 1911 },
      { station: stations.NEWARK_AIRPORT, departAt: 1916 },
      { station: stations.NORTH_ELIZABETH, departAt: 1920 },
      { station: stations.ELIZABETH, departAt: 1923 },
      { station: stations.LINDEN, departAt: 1928 },
      { station: stations.RAHWAY, departAt: 1933 }
    ]
  },
  {
    trainNumber: '7867',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1903 },
      { station: stations.SECAUCUS, departAt: 1912 },
      { station: stations.NEWARK_PENN, departAt: 1921 },
      { station: stations.NEWARK_AIRPORT, departAt: 1926 },
      { station: stations.METROPARK, departAt: 1940 },
      { station: stations.METUCHEN, departAt: 1945 },
      { station: stations.EDISON, departAt: 1950 },
      { station: stations.NEW_BRUNSWICK, departAt: 1954 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2009 },
      { station: stations.HAMILTON, departAt: 2016 },
      { station: stations.TRENTON, departAt: 2028 }
    ]
  },
  {
    trainNumber: '7269',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1907 },
      { station: stations.SECAUCUS, departAt: 1916 },
      { station: stations.NEWARK_PENN, departAt: 1925 },
      { station: stations.NEWARK_AIRPORT, departAt: 1930 },
      { station: stations.ELIZABETH, departAt: 1935 },
      { station: stations.LINDEN, departAt: 1940 },
      { station: stations.RAHWAY, departAt: 1944 }
    ]
  },
  {
    trainNumber: '7869',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1914 },
      { station: stations.SECAUCUS, departAt: 1923 },
      { station: stations.NEWARK_PENN, departAt: 1932 },
      { station: stations.NEWARK_AIRPORT, departAt: 1938 },
      { station: stations.ELIZABETH, departAt: 1943 },
      { station: stations.LINDEN, departAt: 1948 },
      { station: stations.RAHWAY, departAt: 1952 },
      { station: stations.METROPARK, departAt: 1958 },
      { station: stations.METUCHEN, departAt: 2003 },
      { station: stations.EDISON, departAt: 2008 },
      { station: stations.NEW_BRUNSWICK, departAt: 2012 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2027 },
      { station: stations.HAMILTON, departAt: 2034 },
      { station: stations.TRENTON, departAt: 2046 }
    ]
  },
  {
    trainNumber: '7673',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 1951 },
      { station: stations.SECAUCUS, departAt: 2000 },
      { station: stations.NEWARK_PENN, departAt: 2011 },
      { station: stations.NEWARK_AIRPORT, departAt: 2016 },
      { station: stations.NORTH_ELIZABETH, departAt: 2020 },
      { station: stations.ELIZABETH, departAt: 2023 },
      { station: stations.LINDEN, departAt: 2028 },
      { station: stations.RAHWAY, departAt: 2033 }
    ]
  },
  {
    trainNumber: '7871',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 2003 },
      { station: stations.SECAUCUS, departAt: 2012 },
      { station: stations.NEWARK_PENN, departAt: 2021 },
      { station: stations.NEWARK_AIRPORT, departAt: 2026 },
      { station: stations.METROPARK, departAt: 2041 },
      { station: stations.METUCHEN, departAt: 2046 },
      { station: stations.EDISON, departAt: 2051 },
      { station: stations.NEW_BRUNSWICK, departAt: 2055 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2111 },
      { station: stations.HAMILTON, departAt: 2118 },
      { station: stations.TRENTON, departAt: 2130 }
    ]
  },
  {
    trainNumber: '7273',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 2007 },
      { station: stations.SECAUCUS, departAt: 2016 },
      { station: stations.NEWARK_PENN, departAt: 2025 },
      { station: stations.NEWARK_AIRPORT, departAt: 2030 },
      { station: stations.ELIZABETH, departAt: 2035 },
      { station: stations.LINDEN, departAt: 2040 },
      { station: stations.RAHWAY, departAt: 2044 }
    ]
  },
  {
    trainNumber: '7873',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 2014 },
      { station: stations.SECAUCUS, departAt: 2023 },
      { station: stations.NEWARK_PENN, departAt: 2032 },
      { station: stations.NEWARK_AIRPORT, departAt: 2037 },
      { station: stations.ELIZABETH, departAt: 2042 },
      { station: stations.LINDEN, departAt: 2048 },
      { station: stations.RAHWAY, departAt: 2052 },
      { station: stations.METROPARK, departAt: 2057 },
      { station: stations.METUCHEN, departAt: 2102 },
      { station: stations.EDISON, departAt: 2107 },
      { station: stations.NEW_BRUNSWICK, departAt: 2111 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2126 },
      { station: stations.HAMILTON, departAt: 2133 },
      { station: stations.TRENTON, departAt: 2145 }
    ]
  },
  {
    trainNumber: '7875',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 2101 },
      { station: stations.NEWARK_PENN, departAt: 2117 },
      { station: stations.NEWARK_AIRPORT, departAt: 2122 },
      { station: stations.METROPARK, departAt: 2135 },
      { station: stations.METUCHEN, departAt: 2140 },
      { station: stations.EDISON, departAt: 2145 },
      { station: stations.NEW_BRUNSWICK, departAt: 2149 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2207 },
      { station: stations.HAMILTON, departAt: 2214 },
      { station: stations.TRENTON, departAt: 2226 }
    ]
  },
  {
    trainNumber: '7277',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 2107 },
      { station: stations.SECAUCUS, departAt: 2116 },
      { station: stations.NEWARK_PENN, departAt: 2125 },
      { station: stations.NEWARK_AIRPORT, departAt: 2130 },
      { station: stations.NORTH_ELIZABETH, departAt: 2134 },
      { station: stations.ELIZABETH, departAt: 2137 },
      { station: stations.LINDEN, departAt: 2142 },
      { station: stations.RAHWAY, departAt: 2146 }
    ]
  },
  {
    trainNumber: '7877',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 2114 },
      { station: stations.SECAUCUS, departAt: 2123 },
      { station: stations.NEWARK_PENN, departAt: 2132 },
      { station: stations.NEWARK_AIRPORT, departAt: 2137 },
      { station: stations.ELIZABETH, departAt: 2142 },
      { station: stations.LINDEN, departAt: 2148 },
      { station: stations.RAHWAY, departAt: 2152 },
      { station: stations.METROPARK, departAt: 2157 },
      { station: stations.METUCHEN, departAt: 2202 },
      { station: stations.EDISON, departAt: 2207 },
      { station: stations.NEW_BRUNSWICK, departAt: 2211 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2226 },
      { station: stations.HAMILTON, departAt: 2233 },
      { station: stations.TRENTON, departAt: 2245 }
    ]
  },
  {
    trainNumber: '7879',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 2157 },
      { station: stations.NEWARK_PENN, departAt: 2213 },
      { station: stations.NEWARK_AIRPORT, departAt: 2218 },
      { station: stations.METROPARK, departAt: 2232 },
      { station: stations.METUCHEN, departAt: 2237 },
      { station: stations.EDISON, departAt: 2242 },
      { station: stations.NEW_BRUNSWICK, departAt: 2246 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2301 },
      { station: stations.HAMILTON, departAt: 2308 },
      { station: stations.TRENTON, departAt: 2320 }
    ]
  },
  {
    trainNumber: '7281',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 2207 },
      { station: stations.SECAUCUS, departAt: 2216 },
      { station: stations.NEWARK_PENN, departAt: 2225 },
      { station: stations.NEWARK_AIRPORT, departAt: 2230 },
      { station: stations.NORTH_ELIZABETH, departAt: 2234 },
      { station: stations.ELIZABETH, departAt: 2237 },
      { station: stations.LINDEN, departAt: 2242 },
      { station: stations.RAHWAY, departAt: 2246 }
    ]
  },
  {
    trainNumber: '7881',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 2214 },
      { station: stations.SECAUCUS, departAt: 2223 },
      { station: stations.NEWARK_PENN, departAt: 2232 },
      { station: stations.NEWARK_AIRPORT, departAt: 2237 },
      { station: stations.ELIZABETH, departAt: 2242 },
      { station: stations.LINDEN, departAt: 2248 },
      { station: stations.RAHWAY, departAt: 2252 },
      { station: stations.METROPARK, departAt: 2257 },
      { station: stations.METUCHEN, departAt: 2302 },
      { station: stations.EDISON, departAt: 2307 },
      { station: stations.NEW_BRUNSWICK, departAt: 2311 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2326 },
      { station: stations.HAMILTON, departAt: 2333 },
      { station: stations.TRENTON, departAt: 2345 }
    ]
  },
  {
    trainNumber: '7883',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 2257 },
      { station: stations.NEWARK_PENN, departAt: 2312 },
      { station: stations.NEWARK_AIRPORT, departAt: 2318 },
      { station: stations.METROPARK, departAt: 2332 },
      { station: stations.METUCHEN, departAt: 2337 },
      { station: stations.EDISON, departAt: 2342 },
      { station: stations.NEW_BRUNSWICK, departAt: 2346 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2402 },
      { station: stations.HAMILTON, departAt: 2408 },
      { station: stations.TRENTON, departAt: 2420 }
    ]
  },
  {
    trainNumber: '7285',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 2307 },
      { station: stations.SECAUCUS, departAt: 2316 },
      { station: stations.NEWARK_PENN, departAt: 2325 },
      { station: stations.NEWARK_AIRPORT, departAt: 2330 },
      { station: stations.NORTH_ELIZABETH, departAt: 2334 },
      { station: stations.ELIZABETH, departAt: 2337 },
      { station: stations.LINDEN, departAt: 2342 },
      { station: stations.RAHWAY, departAt: 2346 }
    ]
  },
  {
    trainNumber: '7885',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 2314 },
      { station: stations.SECAUCUS, departAt: 2323 },
      { station: stations.NEWARK_PENN, departAt: 2332 },
      { station: stations.NEWARK_AIRPORT, departAt: 2337 },
      { station: stations.ELIZABETH, departAt: 2342 },
      { station: stations.LINDEN, departAt: 2348 },
      { station: stations.RAHWAY, departAt: 2352 },
      { station: stations.METROPARK, departAt: 2357 },
      { station: stations.METUCHEN, departAt: 2402 },
      { station: stations.EDISON, departAt: 2407 },
      { station: stations.NEW_BRUNSWICK, departAt: 2411 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2426 },
      { station: stations.HAMILTON, departAt: 2433 },
      { station: stations.TRENTON, departAt: 2445 }
    ]
  },
  {
    trainNumber: '7201',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 2405 },
      { station: stations.SECAUCUS, departAt: 2414 },
      { station: stations.NEWARK_PENN, departAt: 2422 },
      { station: stations.NEWARK_AIRPORT, departAt: 2427 },
      { station: stations.NORTH_ELIZABETH, departAt: 2431 },
      { station: stations.ELIZABETH, departAt: 2434 },
      { station: stations.LINDEN, departAt: 2439 },
      { station: stations.RAHWAY, departAt: 2443 }
    ]
  },
  {
    trainNumber: '7887',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 2414 },
      { station: stations.SECAUCUS, departAt: 2423 },
      { station: stations.NEWARK_PENN, departAt: 2432 },
      { station: stations.NEWARK_AIRPORT, departAt: 2437 },
      { station: stations.ELIZABETH, departAt: 2442 },
      { station: stations.LINDEN, departAt: 2448 },
      { station: stations.RAHWAY, departAt: 2452 },
      { station: stations.METROPARK, departAt: 2457 },
      { station: stations.METUCHEN, departAt: 2502 },
      { station: stations.EDISON, departAt: 2507 },
      { station: stations.NEW_BRUNSWICK, departAt: 2511 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2529 },
      { station: stations.HAMILTON, departAt: 2536 },
      { station: stations.TRENTON, departAt: 2552 }
    ]
  },
  {
    trainNumber: '7205',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 2500 },
      { station: stations.SECAUCUS, departAt: 2509 },
      { station: stations.NEWARK_PENN, departAt: 2517 },
      { station: stations.NEWARK_AIRPORT, departAt: 2522 },
      { station: stations.ELIZABETH, departAt: 2527 },
      { station: stations.LINDEN, departAt: 2532 },
      { station: stations.RAHWAY, departAt: 2536 }
    ]
  },
  {
    trainNumber: '7805',
    isWeekend: true,
    routes: [
      { station: stations.NEW_YORK, departAt: 2522 },
      { station: stations.SECAUCUS, departAt: 2531 },
      { station: stations.NEWARK_PENN, departAt: 2540 },
      { station: stations.NEWARK_AIRPORT, departAt: 2545 },
      { station: stations.NORTH_ELIZABETH, departAt: 2549 },
      { station: stations.ELIZABETH, departAt: 2552 },
      { station: stations.LINDEN, departAt: 2558 },
      { station: stations.RAHWAY, departAt: 2602 },
      { station: stations.METROPARK, departAt: 2608 },
      { station: stations.METUCHEN, departAt: 2613 },
      { station: stations.EDISON, departAt: 2618 },
      { station: stations.NEW_BRUNSWICK, departAt: 2623 },
      { station: stations.JERSEY_AVENUE, departAt: 2628 },
      { station: stations.PRINCETON_JUNCTION, departAt: 2642 },
      { station: stations.HAMILTON, departAt: 2649 },
      { station: stations.TRENTON, departAt: 2706 }
    ]
  }
];

export default trainRoutes;