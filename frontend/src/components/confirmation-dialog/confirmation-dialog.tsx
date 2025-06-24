import React, { PropsWithChildren } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface Props {
  title: string;
  description: string | React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onConfirm?: (values?: any) => void;
  onCancel?: VoidFunction;
  okText?: string;
  okButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  cancelButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  cancelText?: string;
}

const ConfirmationDialog: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
  description,
  onConfirm = () => {},
  onCancel = () => {},
  okButtonProps = {
    className: 'bg-primary-main text-white',
  },
  cancelButtonProps,
  okText = 'Sim',
  cancelText = 'Cancelar',
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-base-light'>
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className='text-base-light/70'>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel} {...cancelButtonProps}>
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} {...okButtonProps}>
            {okText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationDialog;
