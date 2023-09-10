import React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as Custom from '@ui/primitives';
import Section from '@ui/Section';
import envConfig from '@utils/envConfig';
import { walletClient } from '@providers/web3/walletClient';
import useApprove from './state/useApprove';
import usePurchase from './state/usePurchase';
import useReferral from './state/useReferral';
import {
  PaymentSelection,
  PaymentToken,
  usePaymentSelection,
} from './PaymentSelection';
import { PurchaseAmount, usePurchaseAmount } from './PurchaseAmount';
import useReadApprove from './state/useReadApprove';

export default function Purchase() {
  const referral = useReferral();
  const payment = usePaymentSelection();
  const amount = usePurchaseAmount();

  const readBusdApproval = useReadApprove({
    token: 'busd',
    isEnabled: payment.selectedToken === 'busd',
  });
  const readUsdtApproval = useReadApprove({
    token: 'usdt',
    isEnabled: payment.selectedToken === 'usdt',
  });
  const readDaiApproval = useReadApprove({
    token: 'dai',
    isEnabled: payment.selectedToken === 'dai',
  });

  const approve = useApprove({
    token: payment.selectedToken,
    amount: amount.valueAsNumber,
  });

  const purchase = usePurchase({
    paymentToken: payment.selectedToken,
    amount: amount.valueAsNumber,
    referredBy: referral.referredBy,
  });

  function renderPurchaseButtonIfEnoughApproval() {
    const paymentType: Record<PaymentToken, React.ReactNode> = {
      busd:
        readBusdApproval.value >= amount.valueAsNumber ? (
          <PurchaseButton {...purchase} />
        ) : (
          <ApproveButton {...approve} />
        ),
      usdt:
        readUsdtApproval.value >= amount.valueAsNumber ? (
          <PurchaseButton {...purchase} />
        ) : (
          <ApproveButton {...approve} />
        ),
      dai:
        readDaiApproval.value >= amount.valueAsNumber ? (
          <PurchaseButton {...purchase} />
        ) : (
          <ApproveButton {...approve} />
        ),
    };

    return paymentType[payment.selectedToken];
  }

  return (
    <PurchaseBox>
      <Section.Header>
        <Section.Title>Purchase Emana</Section.Title>
      </Section.Header>
      <AddEmanaToken />

      <PaymentSelection {...payment} />
      <PurchaseAmount {...amount} />

      {renderPurchaseButtonIfEnoughApproval()}
    </PurchaseBox>
  );
}

function ApproveButton(props: ReturnType<typeof useApprove>) {
  return (
    <Custom.Button
      w='full'
      variant='primary'
      onClick={() => props.exec?.()}
      isLoading={props.isLoading}
      disabled={!props.exec}
    >
      Approve
    </Custom.Button>
  );
}

function PurchaseButton(props: ReturnType<typeof usePurchase>) {
  return (
    <Custom.Button
      w='full'
      variant='primary'
      onClick={() => props.exec?.()}
      isLoading={props.isLoading}
      disabled={!props.exec}
    >
      Purchase
    </Custom.Button>
  );
}

const PurchaseBox = Chakra.chakra(Chakra.VStack, {
  baseStyle: {
    layerStyle: 'box-muted',
    mx: 'auto',
    w: 'min(460px, 100%)',
    h: 'min(420px, 90dvh)',
    px: '2xl',
    py: 'xl',
    justify: 'space-between',
    spacing: 'md',
  },
});

function AddEmanaToken() {
  return (
    <Custom.Button
      onClick={async () => {
        await walletClient.watchAsset({
          type: 'ERC20',
          options: {
            address: envConfig.emanaAddr,
            decimals: 18,
            symbol: 'EMANA',
          },
        });
      }}
    >
      Add Emana token to wallet
    </Custom.Button>
  );
}
