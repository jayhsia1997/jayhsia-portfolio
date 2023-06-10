import React from 'react';
import {
	AppBar,
	Box,
	Button,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';


interface Props {
	window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
	{
		name: "About",
		path: "/about"
	}
];

const Navbar = (props: Props) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const navigate = useNavigate();

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }} onClick={() => onNavItemClick("/")}>
				Jay Hsia
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item.name} disablePadding>
						<ListItemButton
							sx={{ textAlign: 'center' }}
							onClick={() => onNavItemClick(item.path)}
						>
							<ListItemText primary={item.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	const onNavItemClick = (path: string) => {
		console.log(path)
		navigate(path)
	}

	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar component="nav">
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: 'none' } }}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
							onClick={() => onNavItemClick("/")}
						>
							Jay Hsia
						</Typography>
						<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
							{navItems.map((item) => (
								<Button
									key={item.name}
									sx={{ color: '#fff' }}
									onClick={() => onNavItemClick(item.path)}
								>
									{item.name}
								</Button>
							))}
						</Box>
					</Toolbar>
				</AppBar>
				<Box component="nav">
					<Drawer
						container={container}
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: 'block', sm: 'none' },
							'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
						}}
					>
						{drawer}
					</Drawer>
				</Box>
			</Box>
			<Toolbar />
		</>
	);
};

export default Navbar;