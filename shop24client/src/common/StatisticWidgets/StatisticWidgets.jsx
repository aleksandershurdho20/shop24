import { Icon } from '@iconify/react';
import BugReportIcon from '@mui/icons-material/BugReport';// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';



export default function StatisticWidgets({color,background,backgroundSecondary}) {
    
    const RootStyle = styled(Card)(({ theme }) => ({
        boxShadow: 'none',
        textAlign: 'center',
        padding: theme.spacing(5, 0),
        color: color,
        backgroundColor: backgroundSecondary,
        width:'97%'
      }));
      
      const IconWrapperStyle = styled('div')(({ theme }) => ({
        margin: 'auto',
        display: 'flex',
        borderRadius: '50%',
        alignItems: 'center',
        width: theme.spacing(8),
        height: theme.spacing(8),
        justifyContent: 'center',
        marginBottom: theme.spacing(3),
        color: color,
        backgroundImage: `linear-gradient(135deg, ${alpha(color, 0)} 0%, ${alpha(
            color,
          0.24
        )} 100%)`
      }));
      
      
      const TOTAL = 234;
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={BugReportIcon} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{TOTAL}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Bug Reports
      </Typography>
    </RootStyle>
  );
}