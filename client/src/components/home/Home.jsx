import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
}
export default function Home() {
  return (
    <div>
    <Toolbar />
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Inicio
      </Link>
      <Typography color="textPrimary">Vista General</Typography>
    </Breadcrumbs>
    </div>
  )}
