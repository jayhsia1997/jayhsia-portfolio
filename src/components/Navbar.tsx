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
		name: "Home",
		path: "/"
	},
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
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">Jay Hsia</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					{navItems.map((item) => (
						<li key={item.name}>
							<a onClick={() => onNavItemClick(item.path)}>{item.name}</a>
						</li>
					))}
					<li>
						<details>
							<summary>
								Theme
							</summary>
							<ul className="p-2 bg-base-100">
								<li>
									<a>Light</a>
								</li>
								<li>
									<a>Dark</a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;