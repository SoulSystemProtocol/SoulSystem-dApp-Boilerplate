import { Box, Button, Stack, Typography, Tooltip } from '@mui/material';
import useError from 'hooks/useError';
import useContract from 'hooks/useContract';
import { taskStageToString, nameSoul } from 'utils/converters';
import EntityImage from '../EntityImage';
import { PROC_STAGE_REV } from 'constants/contracts';
import AddressHash from 'components/web3/AddressHash';
import { DataContext } from 'contexts/data';
import { useContext, useEffect, useState } from 'react';
import FundDialogButton from 'components/web3/FundDialogButton';
import { isSoulHasRole } from 'hooks/utils';
import useWeb3NativeBalance from 'hooks/useWeb3NativeBalance';
import { SelectedSoulContext } from 'contexts/SelectedSoul';
import useContainerEntity from 'hooks/useContainerEntity';
import { getChainData } from 'components/web3/chains/ChainsData';
import { nameEntity } from 'helpers/utils';
import TokenBalance from 'components/web3/TokenBalance';
import TooltipButton from 'components/layout/TooltipButton';
import SoulDescription from '../soul/SoulDescription';

/**
 * Component: project details.
 */
export default function TaskDetail({ item, sx }: any) {
  const { soul } = useContext(SelectedSoulContext);
  const { containerName, containerImageSrc } = useContainerEntity(soul.id);
  const { getContractTask } = useContract();
  const { handleError } = useError();
  const { accountSoul } = useContext(DataContext);
  const [isSoulAdmin, setIsSoulAdmin] = useState(false);
  const [isSoulAuthority, setIsSoulAuthority] = useState(false);
  const tokens: string[] = []; //Supported ERC20 Tokens
  const { balance: fund } = useWeb3NativeBalance(item?.id);

  const loadData = () => {
    if (accountSoul && item) {
      try {
        setIsSoulAdmin(isSoulHasRole(item, accountSoul.id, 'admin'));
        setIsSoulAuthority(isSoulHasRole(item, accountSoul.id, 'authority'));
        return;
      } catch (error: any) {
        handleError(error, true);
      }
    }
    setIsSoulAdmin(false);
    setIsSoulAuthority(false);
  };

  useEffect(() => loadData(), [item, accountSoul]);

  if (!soul || !item) return <></>;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        mb: { xs: 1, md: 2 },
        ...sx,
      }}
    >
      <Box
        sx={{
          margin: '0 auto',
          flexGrow: 0,
        }}
      >
        <EntityImage imgSrc={containerImageSrc} title={containerName} />
        {/* <Typography sx={{ mx: '16px' }}>
          {containerName ? `By: ${containerName}` : ''}
        </Typography> */}
        {/* {isOwned && ( */}
        {/* //TODO: Support editing other souls */}
        {/* <Link href={`/soul/edit`}>
          <Button size="small" variant="outlined" sx={{ mt: 2, width: 164 }}>
            Edit
          </Button>
        </Link> */}
        {/* )} */}
      </Box>

      <Stack
        direction="column"
        spacing={1}
        sx={{ flexGrow: 1, mt: { xs: 2, md: 0 }, ml: { md: 4 } }}
      >
        <Typography variant="h1">{nameSoul(soul)}</Typography>
        <AddressHash
          address={item.id}
          sx={{ color: 'text.secondary', float: 'right' }}
        />
        <Typography color="text.secondary" variant="body2">
          {containerName ? (
            <>
              By: <span>{containerName}</span>
            </>
          ) : (
            ''
          )}
        </Typography>
        <Typography color="text.secondary" variant="body2" sx={{ mt: 1 }}>
          <span>{taskStageToString(item)}</span>
          {fund ? ` | ${fund} ${getChainData()?.native}` : ''} |{' '}
          <TokenBalance account={item.id} />
        </Typography>
        <SoulDescription soul={soul} sx={{ mt: 1 }} />
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          {(item.stage === null || item.stage >= PROC_STAGE_REV.pending) && (
            <FundDialogButton
              text={`Fund ${nameEntity('task')}`}
              address={item.id}
            />
          )}

          <TooltipButton
            disabled={!isSoulAdmin || item.stage != PROC_STAGE_REV.execute}
            tooltip={
              !isSoulAdmin
                ? 'Requires permissions'
                : item.stage != PROC_STAGE_REV.execute
                ? 'Wrong stage'
                : null
            }
            size="small"
            variant="outlined"
            onClick={() => getContractTask(item.id).stageExecusion(tokens)}
          >
            Disburse Prize
          </TooltipButton>

          <TooltipButton
            disabled={!(item.stage > PROC_STAGE_REV.execute)}
            tooltip={
              !(item.stage > PROC_STAGE_REV.execute) ? 'Wrong stage' : null
            }
            size="small"
            variant="outlined"
            onClick={() => getContractTask(item.id).disburse(tokens)}
          >
            Disburse Funds
          </TooltipButton>

          {/* //TODO: Add reason for cancellation in URI */}
          <TooltipButton
            disabled={
              !(
                (isSoulAdmin || isSoulAuthority) &&
                item.stage > PROC_STAGE_REV.decision &&
                item.stage < PROC_STAGE_REV.closed
              )
            }
            tooltip={
              !isSoulAdmin && !isSoulAuthority
                ? 'Requires permissions'
                : !(
                    item.stage > PROC_STAGE_REV.decision &&
                    item.stage < PROC_STAGE_REV.closed
                  )
                ? 'Wrong stage'
                : null
            }
            size="small"
            variant="outlined"
            onClick={() => getContractTask(item.id).cancel('TEST_URI', tokens)}
          >
            Cancel {nameEntity('task')}
          </TooltipButton>
          <TooltipButton
            disabled={!(item.stage > PROC_STAGE_REV.cancelled)}
            tooltip={
              item.stage <= PROC_STAGE_REV.cancelled
                ? 'Available after cancelation'
                : null
            }
            size="small"
            variant="outlined"
            onClick={() => getContractTask(item.id).refund(tokens)}
          >
            Refund
          </TooltipButton>
        </Stack>
      </Stack>
    </Box>
  );
}
