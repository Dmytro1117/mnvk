import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
// import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Loader } from './Loader/Loader';
import { refreshUser } from '../redux/Authorization/operations';

const Register = lazy(() => import('../pages/Register/Register'));
const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));

const Driver = lazy(() =>
  import('../pages/Driver/DriverStartingPage/DriverStartingPage'),
);
const DriverAbout = lazy(() =>
  import('../pages/Driver/DriverAbout/DriverAbout'),
);
const DriverGallery = lazy(() =>
  import('../pages/Driver/DriverGallery/DriverGallery'),
);
const DriverLecture = lazy(() =>
  import('../pages/Driver/DriverLecture/DriverLecture'),
);
const DriverQuizz = lazy(() =>
  import('../pages/Driver/DriverQuizz/DriverQuizz'),
);

const Secretary = lazy(() =>
  import('../pages/Secretary/SecretaryStartingPage/SecretaryStartingPage'),
);
const SecretaryAbout = lazy(() =>
  import('../pages/Secretary/SecretaryAbout/SecretaryAbout'),
);
const SecretaryGallery = lazy(() =>
  import('../pages/Secretary/SecretaryGallery/SecretaryGallery'),
);
const SecretaryLecture = lazy(() =>
  import('../pages/Secretary/SecretaryLecture/SecretaryLecture'),
);
const SecretaryQuizz = lazy(() =>
  import('../pages/Secretary/SecretaryQuizz/Quiz'),
);

const WebDesign = lazy(() =>
  import('../pages/WebDesign/WebDesignStartingPage/WebDesignStartingPage'),
);
const WebDesignAbout = lazy(() =>
  import('../pages/WebDesign/WebDesignAbout/WebDesignAbout'),
);
const WebDesignGallery = lazy(() =>
  import('../pages/WebDesign/WebDesignGallery/WebDesignGallery'),
);
const WebDesignLecture = lazy(() =>
  import('../pages/WebDesign/WebDesignLecture/WebDesignLecture'),
);
const WebDesignQuizz = lazy(() =>
  import('../pages/WebDesign/WebDesignQuizz/WebDesignQuizz'),
);

const Locksmith = lazy(() =>
  import('../pages/Locksmith/LocksmithStartingPage/LocksmithStartingPage'),
);
const LocksmithAbout = lazy(() =>
  import('../pages/Locksmith/LocksmithAbout/LocksmithAbout'),
);
const LocksmithGallery = lazy(() =>
  import('../pages/Locksmith/LocksmithGallery/LocksmithGallery'),
);
const LocksmithLecture = lazy(() =>
  import('../pages/Locksmith/LocksmithLecture/LocksmithLecture'),
);
const LocksmithQuizz = lazy(() =>
  import('../pages/Locksmith/LocksmithQuizz/LocksmithQuizz'),
);

const Cook = lazy(() =>
  import('../pages/Cook/CookStartingPage/CookStartingPage'),
);
const CookAbout = lazy(() => import('../pages/Cook/CookAbout/CookAbout'));
const CookGallery = lazy(() => import('../pages/Cook/CookGallery/CookGallery'));
const CookLecture = lazy(() => import('../pages/Cook/CookLecture/CookLecture'));
const CookQuizz = lazy(() => import('../pages/Cook/CookQuizz/CookQuizz'));

const Psychologist = lazy(() =>
  import(
    '../pages/Psychologist/PsychologistStartingPage/PsychologistStartingPage'
  ),
);
const PsychologistAbout = lazy(() =>
  import('../pages/Psychologist/PsychologistAbout/PsychologistAbout'),
);
const PsychologistGallery = lazy(() =>
  import('../pages/Psychologist/PsychologistGallery/PsychologistGallery'),
);
const PsychologistLecture = lazy(() =>
  import('../pages/Psychologist/PsychologistLecture/PsychologistLecture'),
);
const PsychologistQuizz = lazy(() =>
  import('../pages/Psychologist/PsychologistQuizz/PsychologistQuizz'),
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { isRefreshing } = useSelector(state => state.auth);

  return !isRefreshing ? (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/driver" element={<Driver />} />
          <Route path="/driver/about" element={<DriverAbout />} />
          <Route path="/driver/gallery" element={<DriverGallery />} />
          <Route path="/driver/lec" element={<DriverLecture />} />
          <Route path="/driver/test" element={<DriverQuizz />} />

          <Route path="/secretary" element={<Secretary />} />
          <Route path="/secretary/about" element={<SecretaryAbout />} />
          <Route path="/secretary/gallery" element={<SecretaryGallery />} />
          <Route path="/secretary/lec" element={<SecretaryLecture />} />
          <Route path="/secretary/test" element={<SecretaryQuizz />} />

          <Route path="/web" element={<WebDesign />} />
          <Route path="/web/about" element={<WebDesignAbout />} />
          <Route path="/web/gallery" element={<WebDesignGallery />} />
          <Route path="/web/lec" element={<WebDesignLecture />} />
          <Route path="/web/test" element={<WebDesignQuizz />} />

          <Route path="/locksmith" element={<Locksmith />} />
          <Route path="/locksmith/about" element={<LocksmithAbout />} />
          <Route path="/locksmith/gallery" element={<LocksmithGallery />} />
          <Route path="/locksmith/lec" element={<LocksmithLecture />} />
          <Route path="/locksmith/test" element={<LocksmithQuizz />} />

          <Route path="/cook" element={<Cook />} />
          <Route path="/cook/about" element={<CookAbout />} />
          <Route path="/cook/gallery" element={<CookGallery />} />
          <Route path="/cook/lec" element={<CookLecture />} />
          <Route path="/cook/test" element={<CookQuizz />} />

          <Route path="/psychologist" element={<Psychologist />} />
          <Route path="/psychologist/about" element={<PsychologistAbout />} />
          <Route
            path="/psychologist/gallery"
            element={<PsychologistGallery />}
          />
          <Route path="/psychologist/lec" element={<PsychologistLecture />} />
          <Route path="/psychologist/test" element={<PsychologistQuizz />} />
          {/* <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contactlist />} redirectTo="/login" />
            }
          /> */}
          {/* <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  ) : (
    <Loader />
  );
};
