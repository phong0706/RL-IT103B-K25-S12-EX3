const prompt = require('prompt-sync')();

const subscriptions = [
  { subscriptionId: 'SUB_001', customerName: 'Nguyen Van An', planTier: 'PERSONAL', deviceLimit: 1 }
];

const listSubscriptions = () => {
  console.log('\n--- DANH SACH THUE BAO ---');
  console.table(subscriptions);
};

const addSubscription = () => {
  const customerName = prompt('Nhap ten khach hang: ');
  const newId = `SUB_${String(subscriptions.length + 1).padStart(3, '0')}`;
  subscriptions.push({
    subscriptionId: newId,
    customerName: customerName,
    planTier: 'PERSONAL',
    deviceLimit: 1
  });
  console.log('Them thue bao thanh cong!');
};

const handleMenu = () => {
  let choice;
  do {
    console.log('\n=== QUAN LY THUE BAO ===');
    console.log('1. Xem danh sach');
    console.log('2. Them thue bao moi');
    console.log('3. Thoat');
    
    choice = prompt('Chon chuc nang (1-3): ');
    
    switch (choice) {
      case '1':
        listSubscriptions();
        break;
      case '2':
        addSubscription();
        break;
      case '3':
        console.log('Tam biet!');
        break;
      default:
        console.log('Lua chon khong hop le!');
    }
  } while (choice !== '3');
};

handleMenu();