import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerClose,
  DrawerHeader,
} from './drawer';

const CustomDrawer = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger>1</DrawerTrigger>
      <DrawerContent className="w-24">
        <DrawerHeader>
          <DrawerTitle>알림 내역</DrawerTitle>
          <DrawerClose>X</DrawerClose>
          <div>알림</div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
